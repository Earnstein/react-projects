import Carousel from "react-bootstrap/Carousel";
import Tampa from "../assets/tampa.jpg";
import Img10 from "../assets/images/img10.jpg"
import { NavLink } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
var heroData = [
  {
    id: 1,
    image: Img10,
    title: 'Engineering Innovation, Delivering Solutions',
    description: 'At Amplitude Associates, we drive innovation and deliver solutions to complex engineering.!',
    link: 'https://www.google.com'
  },
  {
    id: 2,
    image: Tampa,
    title: 'Transforming Ideas into Reality',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
    link: 'https://www.facebook.com'
  },
  {
    id: 3,
    image: Tampa,
    title: 'Engineering solutions Tailored to your needs.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
    link: 'https://www.twitter.com'
  }
]

const Hero = () => {
  return (
    <section id="home" className="hero-block">
    <Carousel>
       {
         heroData.map(hero => {
           return (
             <Carousel.Item key={hero.id}>
               <img
                 className="d-block w-100"
                 src={hero.image}
                 alt={"slide " + hero.id}
                 style={{height:"14rem"}}
               />
               <Carousel.Caption>
                 <h2>{hero.title}</h2>
                 <p>{hero.description}</p>
                  <LinkContainer to={"/contact"}>
                  <NavLink className="btn btn-primary" href={hero.link}>Learn More <i className="fas fa-chevron-right"></i></NavLink>
          </LinkContainer>
               </Carousel.Caption>             
             </Carousel.Item>
           );
         })
       }
   </Carousel>
 </section>
  )
}

export default Hero;