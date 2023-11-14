import Recorder from "./Recorder"

const Footer = ({onStop}) => {
  return (
    <section id="Footer" className="fixed bottom-0 w-full z-100 py-6 
    bg-gradient-to-r from-green-300 via-sky-500 to-purple-600
    ">
      <div className="flex justify-center items-center">
        <Recorder handleStop={onStop}/>
      </div>
    </section>
  )
}

export default Footer