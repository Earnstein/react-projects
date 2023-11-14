import { ReactMediaRecorder } from "react-media-recorder";
import { BsMic } from "react-icons/bs";
import { useState } from "react";
const Recorder = ({ handleStop }) => {
    const [isRecording, setisRecording] = useState(false);
    const recordHandler = () => {
        if (isRecording){
            setisRecording(false);
        }
        else{
            setisRecording(true)
        }
    }
  return (
    <ReactMediaRecorder
      audio
      onStop={handleStop}
      render={({ status, startRecording, stopRecording }) => (
        <div className="flex flex-col gap-4 justify-center items-center">
          <button
            onClick={()=>{
                recordHandler();
                isRecording ? stopRecording() : startRecording()
            }}
            className={`w-16 h-16 rounded-full bg-white
    flex justify-center items-center text-sky-500
    transition-all duration-300 hover:text-sky-400 ${
      status === "recording" ? "animate-pulse" : ""
    }`}
          >
            <BsMic size={48}/>
          </button>
          <p className="text-white font-light
           font-palanquin text-2xl">{status}</p>
        </div>
      )}
    />
  );
};

export default Recorder;
