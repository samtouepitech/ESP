import BottomBar from "../../components/bottomBar/bottomBar";
import "./translation.scss";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import * as fp from "fingerpose";
import { drawHand } from "./drawing";
import Webcam from "react-webcam";
import { useRef } from "react";

const Translation = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const runHandpose = async () => {
    const net = await handpose.load();
    setInterval(() => {
      detect(net);
    }, 100);
  };
  
  const detect = async (net) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current != null &&
      webcamRef.current.video.readyState === 4
    ) {
      // get video properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;
      // set video width and height
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;
      // set canvas width and height
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;
      // make detection
      const hand = await net.estimateHands(video);

      if (hand.length > 0) {
        console.log('HAND')
      }

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
  };

  // runHandpose();

  // const launchVideo = () => {
  //   var video = document.querySelector("#videoElement");
  //   if (navigator.mediaDevices.getUserMedia) {
  //     navigator.mediaDevices
  //       .getUserMedia({ video: true })
  //       .then(function (stream) {
  //         video.srcObject = stream;
  //       })
  //       .catch(function (err0r) {
  //         console.log("Something went wrong!");
  //       });
  //   }
  // };

  return (
    <div className="translation">
      <div className="middle-block">
        <div className="block video">
          <Webcam
            ref={webcamRef}
            style={{
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
              left: 0,
              right: 0,
              textAlign: "center",
              zindex: 9,
              width: 640,
              height: 480,
            }}
          />
          <canvas
            ref={canvasRef}
            style={{
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
              left: 0,
              right: 0,
              textAlign: "center",
              zindex: 9,
              width: 640,
              height: 480,
            }}
          />
          {/* <video
            autoplay="true"
            id="videoElement"
            height="400px"
            width="400px"
            style={{ height: "100%", width: "100%" }}
          ></video> */}
        </div>
        <div className="block received">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in
            lacus aliquam, suscipit purus non, vestibulum nisi. Donec sodales,
            erat at maximus ullamcorper, leo tortor venenatis nulla, eget auctor
            enim justo ut velit. Duis sed magna quis magna molestie rhoncus non
            vehicula odio. Vivamus ac nunc interdum odio efficitur pharetra. Ut
            molestie, odio et laoreet pulvinar, enim dui interdum risus, eget
            tristique mi magna vel velit. Pellentesque nec nunc augue.
            Pellentesque fringilla mauris eu convallis lobortis. In sed maximus
            quam. Nam pellentesque accumsan posuere. Curabitur a sem sit amet
            felis dapibus varius. Proin mattis erat odio, eu volutpat libero
            tincidunt quis. Suspendisse at pellentesque ipsum. Aliquam
            ullamcorper.
          </p>
        </div>
        <div className="block answer">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in
            lacus aliquam, suscipit purus non, vestibulum nisi. Donec sodales,
            erat at maximus ullamcorper, leo tortor venenatis nulla, eget auctor
            enim justo ut velit. Duis sed magna quis magna molestie rhoncus non
            vehicula odio. Vivamus ac nunc interdum odio efficitur pharetra. Ut
            molestie, odio et laoreet pulvinar, enim dui interdum risus, eget
            tristique mi magna vel velit. Pellentesque nec nunc augue.
            Pellentesque fringilla mauris eu convallis lobortis. In sed maximus
            quam. Nam pellentesque accumsan posuere. Curabitur a sem sit amet
            felis dapibus varius. Proin mattis erat odio, eu volutpat libero
            tincidunt quis. Suspendisse at pellentesque ipsum. Aliquam
            ullamcorper.
          </p>
        </div>
      </div>
      <div className="bottom-block">
        <BottomBar launchVideo={() => runHandpose()} />
      </div>
    </div>
  );
};

export default Translation;
