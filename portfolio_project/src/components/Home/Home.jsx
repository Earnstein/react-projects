import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { LogoS } from '../../assets/images'
import { jobArray, nameArray, nameArray2 } from '../../constants';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import './Home.scss'

const Home = () => {
  const [letterClass, setletterClass] = useState("text-animate");

  useEffect(() => {
    return setTimeout(()=> {
      setletterClass("text-animate-hover")
    }, 4000)
  }, [])
  
  
  return (
    <section className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
           <br /> 
           <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span> {" "} 
          <AnimatedLetters 
          letterClass={letterClass} 
          strArray={nameArray}
          idx={15}/>
          <img src={LogoS} alt="developer" />
          <AnimatedLetters 
          letterClass={letterClass} 
          strArray={nameArray2}
          idx={21}/>
          <br />
          <AnimatedLetters 
          letterClass={letterClass} 
          strArray={jobArray}
          idx={22}/>
        </h1>
        <h2>
            Frontend developer / Javascript and python Expert 
        </h2>
        <Link to={"/contact"} className="flat-button">CONTACT ME</Link>
      </div>
    </section>
  )
}

export default Home
