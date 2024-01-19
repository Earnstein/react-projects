import Recorder from "./Recorder"

const Footer = ({onStop}) => {
  return (
    <section id="Footer" className="absolute right-0 bottom-0 w-full z-10 
    sm:py-6 py-2 
    bg-gradient-to-r from-green-300 via-sky-400 to-green-300
    ">
      <div className="flex justify-center items-center">
        <Recorder handleStop={onStop}/>
      </div>
    </section>
  )
}

export default Footer