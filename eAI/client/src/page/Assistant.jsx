import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { postAudio } from "../utils/api";

const Assistant = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const blobUrlHandler = (data) => {
    const blob = new Blob([data], { type: "audio/mpeg" });
    const url = window.URL.createObjectURL(blob);
    return url;
  };
  const stopRecordHandler = async (blobUrl) => {
    setIsLoading(true);
    // Append messages

    const userMessage = { sender: "me", blobUrl };
    const allMessages = [...messages, userMessage];
    console.log(allMessages);

    //convert blob url to blob object

    fetch(blobUrl)
      .then((res) => res.blob())
      .then(async (blob) => {
        // construct audio to send a file
        const formData = new FormData();
        formData.append("file", blob, "myfile.mp3");
        //send formData to backend
        try {
          const blob = await postAudio(formData);
          if (blob) {
            const audio = new Audio();
            audio.src = blobUrlHandler(blob);

            // Append to audio
            const assistantMessage = { sender: "naomi", blobUrl: audio.src };

            allMessages.push(assistantMessage);
            setMessages(allMessages);

            //play audio
            setIsLoading(false);
            audio.play();
          }
        } catch (error) {
          console.error(error.message);
          setIsLoading(false);
        }
      });
  };
  return (
    <section id="assistant" 
    className="relative sm:w-[55vh] h-[85vh] w-[40vh] z-[1]
     overflow-y-hidden rounded-lg shadow-lg flex
     flex-col">
      <Header setMessages={setMessages} />
      <section
        className="flex flex-col justify-between 
      h-full overflow-y-auto w-full bg-white-400
      "
      >
        {/* conversations */}
        <div className="mt-4 px-4">
          {messages.map((audio, index) => (
            <div
              key={index + audio.sender}
              className={`flex flex-col ${
                audio.sender === "naomi" ? "items-end" : "items-start"
              }`}
            >
              {/* sender */}
              <div className="mt-4">
                <p
                  className={`italic text-xl ${
                    audio.sender === "naomi"
                      ? "text-right mr-2 text-green-400"
                      : "ml-2 text-sky-400"
                  }`}
                >
                  {audio.sender}
                </p>
                  {/* Audio message */}

                  <audio 
                  src={audio.blobUrl} 
                  className="appearance-none mt-1 max-xs:w-60"
                  controls/>

              </div>
            </div>
          ))}

          {isLoading && (
            <p className="text-center font-light font-montserrat text-sm mt-10 animate-pulse">
              Gimme a few seconds...
            </p>
          )}

          {
            messages.length == 0 && !isLoading && (
              <p className="text-center font-light italic mt-10 font-palanquin">
                Send Naomi a message...
              </p>
            )
          }
        </div>
      </section>
      <Footer onStop={stopRecordHandler} />
    </section>
  );
};

export default Assistant;
