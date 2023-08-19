import RecordRTC from "recordrtc";
import ReactDOM from "react";
import { Button } from "@mui/material";

let recorder = "";

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  debugger;
  if (message.action === "screenPermissionGranted") {
    const recorder = new RecordRTC();
    console.log(recorder);
    debugger;
    recorder.startRecording({
      enableScreen: true,
    });
  }
  if (message.action === "stopRecording") {
    console.log("Received stopRecording message in background.js");
    recorder.stopRecording((blob, error) => {
      if (error) {
        console.error("Error while stopping recording:", error);
        return;
      }

      console.log("Recording Blob size:", blob.size);
      const url = URL.createObjectURL(blob);
      console.log("Here is your video url: ", url);
      // Do something with the recorded video URL
    });
  }
});

chrome.runtime.onMessage.addListener(
  async function (action, sender, sendResponse) {
    debugger;
    alert(action.msg + " <-");
    // if (request.msg === "DeepL") {
    //   const value = await bucket.get();
    //   await funny({
    //     text: request.data.text,
    //     target_lang: request.data.lang,
    //     auth_key: value.AUTH_KEY,
    //     free_api: true,
    //   })
    //     .then((result) => {
    //       // console.log(result.data.translations[0].text);
    //       // alert(result.data.translations[0].text);

    //       const app = document.createElement("div");
    //       console.log(value.X, value.Y, "render");
    //       app.id = "deepl";
    //       app.style.position = "absolute";
    //       app.style.zIndex = "2147483647";
    //       app.style.left = `${value.X}px`;
    //       app.style.top = `${value.Y}px`;
    //       document.body.append(app);
    //       ReactDOM.render(<Main text="Hello World" />, app);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       alert("エラーが発生しました");
    //     });
    // }
    const app = document.createElement("div");
    console.log(action.msg + " Message");
    app.id = "deepl";
    app.style.position = "absolute";
    app.style.zIndex = "2147483647";
    app.style.left = "30px";
    app.style.top = "30px";
    document.body.append(app);
    ReactDOM.render(<Main />, app);
  }
);
const Main = (props) => {
  return (
    <div
      style={{
        backgroundColor: "blue",
        color: "white",
        textAlign: "center",
      }}
    >
      <Button size="medium" variant="contained">
        Hassaan
      </Button>
    </div>
  );
};
