import Nav from "./nav"
import Hero from "./hero"
import Project from "./project"
import Footer from "./footer"
import Webs from "./webs"
import Qualification from "./qualification"


const main = () => {
  return (
   <div  className="bg-indigo-600">
        <Nav/>
        <Hero/>
        <Project/>
        <Qualification/>
        <Webs/>
        <Footer/>

   </div>
  )
}

export default main
