'use client'

import Image from 'next/image'
import {CSSProperties, useState} from "react";
import { BsFillMoonStarsFill } from 'react-icons/bs'
import Typewriter from 'typewriter-effect'
import {AiFillGithub, AiFillLinkedin, AiFillMail, AiFillMediumSquare, AiFillTwitterCircle} from "react-icons/ai";
import {
    BiCheck,
    BiLogoAngular, BiLogoBootstrap,
    BiLogoCss3,
    BiLogoJavascript, BiLogoMongodb,
    BiLogoNodejs,
    BiLogoReact,
    BiLogoTailwindCss
} from "react-icons/bi";
import {
    SiAmazonaws,
    SiAnsible,
    SiDocker,
    SiExpress,
    SiFirebase,
    SiHtml5,
    SiJenkins,
    SiKubernetes, SiTerraform
} from "react-icons/si";
import {useForm} from "@formspree/react";
import {Dancing_Script} from "next/font/google";
import Link from "next/link";
const dancingScript = Dancing_Script({ subsets: ['latin'], display: 'swap', adjustFontFallback: false })

const portfolioStyle = {
  layout: 'responsive',
  hover: 'opacity-75'
}

const scroll: CSSProperties = {
  scrollBehavior: 'smooth'
}

export default function Home() {

  const [darkMode, setDarkMode] = useState(true)
    const [state, handleSubmit] = useForm('mrgwzblg')

    return (
        <div className={darkMode ? 'dark' : ''}>
            <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-950 text-gray-700">
              <section className={'min-h-screen relative'}>
                  <nav className={'py-10 mb-12 flex justify-between dark:text-white sticky top-0 z-50 bg-white dark:bg-gray-950'}>
                      <h1 className={`text-xl ${dancingScript.className} dark:text-white `}><a href='#'> Hi, I&apos;m
                          Tejas</a></h1>
                      <ul className={'flex items-center justify-center flex-row px-2 lg:gap-10 md:gap-10'}>
                          <li className={'dark:text-white hover:text-blue-500'}>
                              <a href="#about" style={scroll}>About</a>
                          </li>
                          <li className={'dark:text-white hover:text-blue-500'}>
                              <a href="#skills" style={scroll}>Skills</a>
                          </li>
                          <li className={'dark:text-white hover:text-blue-500'}>
                              <a href="#services" style={scroll}>Services</a>
                          </li>
                          {/*<li className={'dark:text-white hover:text-blue-500'}>
                              <a href="#projects" style={scroll}>Projects</a>
                          </li>*/}
                          {/*<li className={'dark:text-white hover:text-blue-500'}>
                              <a href="#contact" style={scroll}>Contact</a>
                          </li>*/}
                      </ul>

                      <ul className={'flex items-center justify-end'}>
                          <li>
                              <BsFillMoonStarsFill
                                  className={'cursor-pointer text-2xl text-gray-500 dark:text-gray-200'}
                                  onClick={() => setDarkMode(!darkMode)}/>
                          </li>
                          <li>
                              <a
                                  href="https://mynewfoliobucket.s3.ap-south-1.amazonaws.com/Tejas_Kulkarni_-_Full_Stack_Web_Developer.pdf"
                                  target="_blank"
                                  rel="noopener noreferrer">
                                  <button
                                      className='bg-gradient-to-r from-blue-700 to-cyan-600 px-6 py-2 text-white rounded-md ml-8'>Resume
                                  </button>
                              </a>
                          </li>
                      </ul>
                  </nav>

                  <div className={'text-center p-10'} id='about'>
                      {/*<div className={'w-full flex justify-center mb-5'}>
                    <Image src={tejas} alt={'Profile Image - Tejas Kulkarni'} width={150} height={150}
                           className={'bg-contain rounded-full'}/>
                </div>*/}

                      <h2 className={'text-5xl py-10 text-blue-400 font-medium dark:text-gradient-to-r from-cyan-700 to-cyan-500 md:text-6xl'}>
                          <Typewriter
                              options={{
                                  strings: [
                                      "Hi, I'm Tejas Kulkarni"
                                  ],
                                  autoStart: true,
                                  loop: true,
                                  delay: 90,
                                  skipAddStyles: true,
                                  deleteSpeed: 50
                              }}
                          />
                      </h2>
                      <h3 className='text-3xl py-2 text-black dark:text-white md:text-3xl'>Full Stack Developer and
                          DevOps
                          Enthusiast</h3>
                      <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl max-w-10xl mx-auto'>
                          I&apos;m a full stack developer and DevOps enthusiast with a degree in Computer engineering having
                          5 years of experience .
                          I&apos;m passionate about leveraging my expertise in both front-end and back-end technologies to
                          create
                          innovative solutions.
                          With a deep understanding of backend and frontend, I strive to develop fluent and scalable
                          applications that make a tangible impact.
                          Let&apos;s connect and embark on an exciting journey together in the realm of technology and
                          innovation!
                      </p>
                      <div
                          className='text-5xl flex justify-center flex-row items-center text-gray-600 dark:text-gray-400 md:flex md:gap-10 lg:flex lg:gap-10 '>
                          <a href='https://twitter.com/tejaskul2904'
                             className='hover:text-blue-500'><AiFillTwitterCircle/></a>
                          <a href='https://www.linkedin.com/in/tejaskulkarni29/'
                             className='hover:text-blue-500'><AiFillLinkedin/></a>
                          <a href='https://github.com/tejask29' className='hover:text-blue-500'><AiFillGithub/></a>
                          <a href='https://medium.com/@tejask29'
                             className='hover:text-blue-500'><AiFillMediumSquare/></a>
                          <a href='mailto:tejaskulkarni294@gmail.com' className='hover:text-cyan-500'><AiFillMail/></a>
                      </div>
                      <div className='flex items-center justify-center text-center mx-auto overflow-hidden'>
                          <div
                              className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-64 h-64 mt-20 overflow-hidden md:h-96 md:w-96 lg:w-96 lg:h-96'>
                              <Image alt={'Tejas Kulkarni'} src={"https://mynewfoliobucket.s3.ap-south-1.amazonaws.com/profile.JPG"} className={'z-0'}/>
                          </div>
                      </div>
                  </div>

                  <div id='skills'>
                      <div>
                          <h1 className='text-5xl py-3 text-black dark:text-gray-200'> My Skills</h1>
                      </div>
                      <div className='text-center p-10 rounded-xl my-10'>

                          <h2 className='text-3xl p-10 my-13 dark:text-gray-200 mb-10'>Front End</h2>
                          <div className='flex flex-wrap justify-evenly mb-10'>
                              <div className='p-2 text-xl dark:text-gray-200 '><BiLogoAngular
                                  className='w-40 h-40 text-red-500 md:w-40 md:h-40 lg:w-48 lg:h-48'/>Angular
                              </div>
                              <div className='p-2 text-xl dark:text-gray-200'><BiLogoReact
                                  className='w-40 h-40 text-cyan-500 md:w-40 md:h-40 lg:w-48 lg:h-48'/>React
                              </div>
                              <div className='p-2 text-xl dark:text-gray-200'><SiHtml5
                                  className='w-40 h-40 text-orange-600 md:w-40 md:h-40 lg:w-48 lg:h-48'/>HTML
                              </div>
                              <div className='p-2 text-xl dark:text-gray-200'><BiLogoCss3
                                  className='w-40 h-40 text-blue-500 md:w-40 md:h-40 lg:w-48 lg:h-48'/>CSS
                              </div>
                              <div className='p-2 text-xl dark:text-gray-200'><BiLogoTailwindCss
                                  className='w-40 h-40 text-blue-500 md:w-40 md:h-40 lg:w-48 lg:h-48'/>Tailwind CSS
                              </div>
                              <div className='p-2 text-xl dark:text-gray-200'><BiLogoBootstrap
                                  className='w-40 h-40 text-purple-700 md:w-40 md:h-40 lg:w-48 lg:h-48'/>Bootstrap
                              </div>
                          </div>

                          <div className={'w-full flex justify-center'}>
                              <hr className={'border-gray-700 w-1/2'}/>
                          </div>


                          <h2 className='text-3xl p-7 dark:text-gray-200 mb-10'>Back End</h2>
                          <div className='flex flex-wrap justify-evenly mb-10'>
                              <div className='p-2 text-xl dark:text-gray-200'><BiLogoNodejs
                                  className='w-40 h-40 text-green-600 md:w-40 md:h-40 lg:w-48 lg:h-48'/>Node.js
                              </div>
                              <div className='p-2 text-xl dark:text-gray-200'><SiExpress
                                  className='w-40 h-40 text-gray-500 md:w-40 md:h-40 lg:w-48 lg:h-48'/> Express
                              </div>
                          </div>

                          <div className={'w-full flex justify-center'}>
                              <hr className={'border-gray-700 w-1/2'}/>
                          </div>

                          <h2 className='text-3xl p-7 dark:text-gray-200 mb-10'>Databases</h2>
                          <div className='flex flex-wrap justify-evenly mb-10'>
                              <div className='p-2 text-xl dark:text-gray-200'><BiLogoMongodb
                                  className='w-40 h-40 text-green-600 md:w-40 md:h-40 lg:w-48 lg:h-48'/>MongoDB
                              </div>
                              <div className='p-2 text-xl dark:text-gray-200'><SiFirebase
                                  className='w-40 h-40 text-yellow-500 md:w-40 md:h-40 lg:w-48 lg:h-48'/>Firebase
                              </div>
                          </div>

                          <div className={'w-full flex justify-center'}>
                              <hr className={'border-gray-700 w-1/2'}/>
                          </div>

                          <h2 className='text-3xl p-7 dark:text-gray-200 mb-10'>DevOps</h2>
                          <div className='flex flex-wrap justify-evenly mb-10'>
                              <div className='p-2 text-xl dark:text-gray-200'><SiDocker
                                  className='w-40 h-40 text-[#0db7ed] md:w-40 md:h-40 lg:w-48 lg:h-48 mb-5'/>Docker
                              </div>
                              <div className='p-2 text-xl dark:text-gray-200'><SiKubernetes
                                  className='w-40 h-40 text-[#3970e4] md:w-40 md:h-40 lg:w-48 lg:h-48 mb-5'/>Kubernetes
                              </div>
                              <div className='p-2 text-xl dark:text-gray-200'><SiJenkins
                                  className='w-40 h-40 text-[#48728B] md:w-40 md:h-40 lg:w-48 lg:h-48 mb-5'/> Jenkins
                              </div>
                              <div className='p-2 text-xl dark:text-gray-200'><SiAnsible
                                  className='w-40 h-40 text-red-500 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-5'/> Ansible
                              </div>
                              <div className='p-2 text-xl dark:text-gray-200'><SiTerraform
                                  className='w-40 h-40 text-[#5c4ee5] md:w-40 md:h-40 lg:w-48 lg:h-48 mb-5'/> Terraform
                              </div>
                          </div>

                          <div className={'w-full flex justify-center'}>
                              <hr className={'border-gray-700 w-1/2'}/>
                          </div>

                          <h2 className='text-3xl p-7 dark:text-gray-200'>Cloud Technologies</h2>
                          <div className='flex flex-wrap justify-evenly'>
                              <div className='p-2 text-xl dark:text-gray-200'><SiAmazonaws
                                  className='w-40 h-40 text-yellow-600 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-5'/>Amazon Web
                                  Services
                              </div>
                          </div>

                      </div>

                  </div>

                  <div id='services'>
                      <div>
                          <h3 className='text-5xl py-3 mb-6 dark:text-white'>Services I Offer</h3>
                          <p className='text-2xl py-2 leading-8 text-grey-800 dark:text-gray-200'>
                              As a Full Stack Developer and a Devops Enthusiast I offer the following services:
                          </p>

                          <ul className='text-lg py-2 leading-8 text-grey-800 dark:text-gray-200 text-justify list-disc ml-9 '>
                              <li className='my-4'><span className='text-blue-500'>Full Stack Web Development  </span> :
                                  I can design and develop responsive web applications using modern frameworks like
                                  Angular and React, backed by efficient server-side implementations using Express and
                                  Node.js.
                              </li>
                              <li className='my-4'><span
                                  className='text-blue-500'>Database Design and Implementation  </span>: I can design
                                  and implement efficient database solutions using MongoDB, ensuring data integrity and
                                  scalability for web applications and data-driven systems
                              </li>
                              <li className='my-4'><span className='text-blue-500'>API Development  </span>: I have
                                  experience in building RESTful APIs using frameworks like Express, enabling seamless
                                  communication between front-end and back-end systems.
                              </li>
                              <li className='my-4'>
                                  <span
                                      className={'text-blue-500'}>Continuous Integration / Continuous Deployment</span>:
                                  I
                                  have experience in deploying applications on the AWS EC2 Instance
                                  manually as well as through Jenkins and have worked with AWS services like AWS
                                  Codepipeline (includes CodeCommit, CodeBuild and CodeDeploy), DynamoDB and Lambda
                              </li>
                              <li className='my-4'><span
                                  className='text-blue-500'>Continuous Improvement and Optimization  </span> : I am
                                  dedicated to continuously improving the performance and scalability of applications,
                                  optimizing code, and staying updated with the latest industry trends and best
                                  practices.
                              </li>
                          </ul>

                      </div>
                      <div className='lg:flex gap-10'>
                          <div
                              className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gradient-to-b from-blue-800 to-blue-500'>
                              <div className='flex justify-center flex-col items-center '>
                                  {/*<Image src={design} width={100} height={100}/>*/}
                                  <h3 className='text-lg font-medium pt-8 pb-2 text-black dark:text-white'>Full Stack
                                      Web Development</h3>
                                  <p className='py-2 text-black dark:text-white'>Front-end and back-end development,
                                      covering the complete technology
                                      stack from user interface to server-side logic and database management. </p>
                                  <h4 className='py-4 text-blue-500 dark:text-white'>Technologies I Use</h4>
                                  <p className='text=grey-800 dark:text-white py-1'>React</p>
                                  <p className='text=grey-800 dark:text-white py-1'>Angular</p>
                                  <p className='text=grey-800 dark:text-white py-1'>MongoDB</p>
                                  <p className='text=grey-800 dark:text-white py-1'>Firebase</p>
                                  <p className='text=grey-800 dark:text-white py-1'>Express Js</p>
                                  <p className='text=grey-800 dark:text-white py-1'>Node Js</p>

                              </div>
                          </div>


                          <div
                              className='text-center shadow-lg  p-10 rounded-xl my-10 dark:bg-gradient-to-b from-blue-800 to-blue-500'>
                              <div className='flex justify-center flex-col items-center '>
                                  {/*<Image src={consulting} width={100} height={100}/>*/}
                                  <h3 className='text-lg font-medium pt-8 pb-2 text-black dark:text-white'>DevOps</h3>
                                  <p className='py-2 text-black dark:text-white'>Designing, coding, testing, and
                                      maintaining computer programs and
                                      applications to meet specific user or business requirements.</p>
                                  <h4 className='py-4 text-blue-500 dark:text-white'>Technologies I Use</h4>
                                  <p className='text-black dark:text-white py-1'>GitHub</p>
                                  <p className='text-black dark:text-white py-1'>Docker</p>
                                  <p className='text-black dark:text-white py-1'>Kubernetes</p>
                                  <p className='text-black dark:text-white py-1'>Ansible</p>
                                  <p className='text-black dark:text-white py-1'>Terraform</p>
                                  {/* <p className='text=grey-800 py-1'>Ansimble</p> */}
                                  <p className='text-black dark:text-white py-1'>Jenkins</p>
                                  <p className='text-black dark:text-white py-1'>Amazon Web Services</p>

                              </div>
                          </div>
                      </div>
                  </div>
                  {/*<div className='py-10' id='projects'>
                      <div>
                      <h3 className='text-5xl py-2 mb-6 dark:text-white'>Portfolio</h3>
                      <p className='text-md py-2 leading-8 text-grey-800 dark:text-gray-200'>
                          My portfolio is a collection of diverse work samples that reflect my expertise and experience
                          in <span className='text-cyan-500'> Full Stack development and DevOps </span> .
                          It includes a range of projects, such as <span className='text-cyan-500'> Pizzeria-react-app , FlySmart , Medical Insurance Premium prediction , Intelligent Traffic Managment System, Portfolio Website </span>
                          each demonstrating my creativity, problem-solving abilities, and professional growth.
                      </p>
                      <p className='text-md py-2 leading-8 text-grey-800 dark:text-gray-200'>
                          Through my portfolio, I aim to present the quality of my work and provide potential employers,
                          clients, or collaborators
                          with a comprehensive understanding of my capabilities.
                          It not only highlights my past achievements but also offers insights into my thought process,
                          approach to projects, and overall professional development. By exploring my portfolio,
                          you will gain a deeper understanding of my skills and be able to assess my suitability for
                          your specific needs.
                      </p>
                  </div>*/}

                  {/*<div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>

                      <div className='basis-1/3 flex-1 '>
                          <a href='https://github.com/Kshitij-Darwhekar/pizzeria-react-app' className='relative'>
                              <Image src={pizza} alt={''}
                                     className='rounded-lg object-cover hover:opacity-50 transition-opacity duration-300'
                                     width={'100%'} height={'100%'} style={portfolioStyle}
                                     title='Checkout code on Github'/>
                              <div
                                  className='absolute inset-0 flex items-center justify-center  opacity-0 hover:opacity-100 transition-opacity duration-300'>
                                  <p className='text-xl text-center text-white hover:text-3xl md:text-2xl lg:text-2xl'>
                                      Click Me to Checkout Code on Github
                                  </p>
                              </div>
                          </a>
                      </div>
                  </div>

                  </div>*/}
              </section>


              {/*<section className='py-10' id='contact'>
                  <h1 className='text-5xl dark:text-gray-200 py-5'>Contact Me</h1>
                  <form onSubmit={handleSubmit}>
                      <label htmlFor='name' className='dark:text-gray-200'>Name</label>
                      <input type='text' id='name'
                             className='border-2 border-blue-500 p-2 rounded-lg w-full dark:border-blue-500 dark:bg-black dark:text-gray-200 mb-5'/>
                      <label htmlFor='email' className='dark:text-gray-200'>Email</label>
                      <input type='email' id='email'
                             className='border-2 border-blue-500 p-2 rounded-lg w-full dark:border-blue-500 dark:bg-black dark:text-gray-200 mb-5'/>
                      <label htmlFor='message' className='dark:text-gray-200'>Message</label>
                      <textarea name='message' id='message' cols={30} rows={10}
                                className='border-2 border-blue-500  p-2 py-4 rounded-lg w-full dark:border-blue-500 dark:bg-black dark:text-gray-200 mb-5'></textarea>
                      <button disabled={state.submitting}
                              className='bg-gradient-to-r from-blue-700 to-blue-500  text-white px-4 py-2 rounded-lg'>Submit
                      </button>
                      { state.succeeded && <p className='text-green-600 mt-2 flex items-center'><BiCheck /> Submitted Successfully</p> }
                  </form>

              </section>*/}

          </main>
      </div>
  )
}
