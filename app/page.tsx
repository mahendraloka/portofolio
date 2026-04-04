import Image from "next/image";
import {Navbar, Hero, About, TechStack, Projects, Contact, Footer} from "./components";
export default function Home() {
  return (
    <div className=" bg-zinc-50 font-sans dark:bg-black">
      <Navbar/>
      <Hero/>
      <About/>
      <TechStack/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}
