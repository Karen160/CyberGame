using UnityEngine;
class GM : MonoBehaviour
{
    public float sbRotSpeed;
    bool debug;
    void Start() { }
    void Update()
    {
        RenderSettings.skybox.SetFloat("_Rotation", Time.time * sbRotSpeed);
    }
    void OnGUI()
    {
        GUI.Label(new Rect(0, -5, Screen.width, Screen.height), string.Format("FPS: {0:0}", 1 / Time.unscaledDeltaTime));
    }
}