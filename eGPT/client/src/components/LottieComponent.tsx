import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "../assets/Animation - 1699478784080.json";
import { useRef } from "react";

const LottieComponent = () => {
  const robotRef = useRef<LottieRefCurrentProps>(null);

  return (
    <Lottie
      style={{ width: "100%", height: "100%" }}
      animationData={animationData}
      lottieRef={robotRef}
      onComplete={() => {
        robotRef.current?.goToAndPlay(45, true);
        robotRef.current?.setSpeed(0.7);
      }}
      loop={false}
    />
  );
};

export default LottieComponent;
