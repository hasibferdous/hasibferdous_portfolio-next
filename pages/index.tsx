import About from "@/Components/About";
import ContactMe from "@/Components/ContactMe";
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import Projects from "@/Components/Projects";
import Skills from "@/Components/Skills";
import {  PageInfo, Project, Skill, Social } from "@/typings";
// import { fetchExperiences } from "@/utils/fetchExperiences";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchSocial } from "@/utils/fetchSocials";

import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";



type Props = {
  // pageInfo: PageInfo;
  // experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}
const Home = ({  projects, skills, socials}: Props)=>{


  return (
    
      <div className="main text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar  scrollbar-track-gray-400/20 scrollbar-thumb-yellow-200/30">
        <Head>

        <title className='text-red-900'>H. M. Hasib Ferdous</title>
        </Head>
        {/* Header */}
        <section id="header" className="">
        <Header socials={socials}></Header>
        </section>
        {/* Hero */}
        <section id="hero" className="">
          <Hero></Hero>
        </section>

        {/* About */}
        <section id="about" className="">
          <About></About>
        </section>
        {/* Experience */}

        {/* Skills */}
        <section id="skills" className="">
          <Skills skills ={skills}></Skills>
        </section>
        {/* Projects */}
        <section id="projects" className="">
          <Projects projects={projects}></Projects>
        </section>
        {/* Contact Me */}
        <section id="contact" className="">
          <ContactMe></ContactMe>
        </section>

        <Link href="#header">
          <footer className="sticky bottom-5 w-full cursor-pointer">
            <div className="flex items-center justify-end mr-11">
              <img 
                className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
                src="https://cdn4.iconfinder.com/data/icons/games-and-sports-1/64/three_arrow_up-512.png"
                alt="home-button"
              />
            </div>
          </footer>
        
        </Link>

     
      </div>
    
  )
}
export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
 
  // const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();


return {
  props: {
    
    skills,
    projects,
    socials,
  },

  revalidate: 10,
};
};
