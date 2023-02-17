import React from "react";
import "./Loading.css";
import Lottie from "react-lottie";
import animationData from "../lotties/loading-lottie.json";

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    renderer: "svg",
  };
  return (
    <div className="loading">
      {/* <h1> Loading ... </h1> */}
      <Lottie options={defaultOptions} height={300} width={300} />
    </div>
  );
};

export default Loading;
