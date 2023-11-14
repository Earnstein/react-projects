import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { postAudio } from "../utils/api";

const Assistant = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const blobUrlHandler = (data) => {
    const blob = new Blob([data], {type: "audio/mpeg"});
    const url = window.URL.createObjectURL(blob);
    return url;
  };
  const stopRecordHandler = async (blobUrl) => {
    setIsLoading(true);
    // Append messages

    const userMessage = {sender: "me", blobUrl}
    const allMessages = [...messages, userMessage]
    console.log(allMessages)

    //convert blob url to blob object

    fetch(blobUrl)
    .then((res) => res.blob())
    .then(async (blob) => {
      // construct audio to send a file
      const formData = new FormData();
      formData.append("file", blob, "myfile.mp3")
      //send formData to backend
      try {
        const blob = await postAudio(formData);
        if (blob){
          const audio = new Audio()
          audio.src = blobUrlHandler(blob);

          // Append to audio
          const assistantMessage = { sender: "jazzy", blobUrl: audio.src};

          allMessages.push(assistantMessage);
          setMessages(allMessages);

          //play audio
          setIsLoading(false)
          audio.play();

        } 
      } catch (error) {
        console.error(error.message);
        setIsLoading(false)
      }
    })

  };
  return (
    <section id="assistant" className=" h-[100vh] overflow-y-hidden">
      <Header setMessages={setMessages} />
      <section
        className="flex flex-col justify-between 
      h-full overflow-y-hidden
      "
      >
        <Footer onStop={stopRecordHandler} />
      </section>
    </section>
  );
};

export default Assistant;
