import Lottie from "lottie-react";
import loader from "./loader.json";

export const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Lottie animationData={loader} style={{ width: "400px" }} />
      <h3>Wait for 2 Seconds...</h3>
    </div>
  );
};
