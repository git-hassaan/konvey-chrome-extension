
// import RecordRTC from "recordrtc";
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    debugger;
    if (message.action === 'screenPermissionGranted') {
        startRecording();
    }
});

const startRecording = () => {
    debugger;
    // const recorder = new RecordRTC();
    // recorder.startRecording({
    //     enableScreen: true,
    // });
    // console.log("Recording started: ", recorder)
    // debugger;

    // chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    //     if (message.action === 'stopRecording') {
    //         console.log("Received stopRecording message in background.js");
    //         recorder.stopRecording((blob, error) => {
    //             if (error) {
    //                 console.error('Error while stopping recording:', error);
    //                 return;
    //             }

    //             console.log('Recording Blob size:', blob.size);
    //             const url = URL.createObjectURL(blob);
    //             console.log("Here is your video url: ", url);
    //             // Do something with the recorded video URL
    //         });
    //     }
    // });
};
