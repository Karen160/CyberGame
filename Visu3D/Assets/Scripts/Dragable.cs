using UnityEngine;
class Dragable : MonoBehaviour
{
    public bool isZoomFovBased;
    public float rotSpeed;
    public float scrollSpeed;
    public float minCamFov;
    public float minCamPos;
    Camera cam;
    float sCamFov;
    Vector3 sCamPos;
    Vector3 sRot;
    void Start()
    {
        cam = Camera.main;
        sCamFov = cam.fieldOfView;
        sCamPos = cam.transform.position;
        sRot = transform.eulerAngles;
    }
    void Update()
    {
        if (isZoomFovBased)
        {
            cam.fieldOfView -= Input.GetAxis("Mouse ScrollWheel") * scrollSpeed;
            cam.fieldOfView = Mathf.Clamp(cam.fieldOfView, minCamFov, sCamFov);
        }
        else
        {
            cam.transform.position += Vector3.forward * Input.GetAxis("Mouse ScrollWheel") * scrollSpeed;
            if (cam.transform.position.z <= sCamPos.z) cam.transform.position = new Vector3(0, 0, sCamPos.z);
            if (cam.transform.position.z >= minCamPos) cam.transform.position = new Vector3(0, 0, minCamPos);
        }
        if (Input.GetMouseButtonDown(2))
        {
            transform.eulerAngles = sRot;
            cam.fieldOfView = sCamFov;
            cam.transform.position = sCamPos;
        }
    }
    void OnMouseDrag()
    {
        transform.Rotate(Vector3.down, Input.GetAxis("Mouse X") * rotSpeed, Space.World);
        transform.Rotate(Vector3.right, Input.GetAxis("Mouse Y") * rotSpeed, Space.World);
    }
}