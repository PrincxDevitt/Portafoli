import Nav from "./nav"
import Hero from "./hero"
import Project from "./project"
import Footer from "./footer"
import Webs from "./webs"


const main = () => {
  return (
   <div  className="bg-indigo-600">
        <Nav/>
        <Hero/>
        <Project/>
        <Webs/>
        <Footer/>

   </div>
  )
}

export default main
