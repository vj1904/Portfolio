import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillInstagram, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import Image from 'next/image';
import avatar from "../public/avatar.png";
import Shoes from "../public/My designs/UiUx/shoes.com.png";
import Chatbud from "../public/My designs/UiUx/Final Challenge.png";
import WeatherApp from "../public/My designs/UiUx/weather_app.png";
import WebDesign from "../public/My designs/UiUx/web design.png";
import Vector from "../public/My designs/Logos/vector.png";
import Fd from "../public/My designs/Logos/fd.png";
import Diwali from "../public/My designs/Logos/diwali 2.png";
import NewYear from "../public/My designs/Logos/new year.png";
import Pin from "../public/My designs/UiUx/pin.png";
import {useState} from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=' bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className=' min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-2xl dark:text-white'>VJ</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} className='cursor-pointer text-2xl mx-6 dark:text-white' />
              </li>
              <li className='bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 text-white rounded-md'><a href="https://docs.google.com/document/d/1lFqEvORS54s3FM2Tr7r5yIjBr63L24OvIf3VRKjq4jY/edit?usp=share_link">Resume</a></li>
            </ul>
          </nav>
          <div className='relative mx-auto bg-gradient-to-b from-gray-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
            <Image src={avatar} alt="avatar" layout="fill" objectFit='cover' />
          </div>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:tex-6xl'>Vaibhav Jaiswal</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Developer and designer.</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white'>
              Hello! I am a web developer & currently workning at <span className='text-cyan-500 font-semibold'>Open Source Software Research and Development Center</span> as a Designer & Developer.
            </p>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl font-semibold py-1 dark:text-white lg:text-5xl'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-white lg:text-xl'>Being a designer and developer helped me a lot to actually picturize my ideas and then deal with the creation part. Here you can find my works and links to the websites I have created.</p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'><Image className='rounded-lg object-cover w-100% h-100%' layout="responsive"  src={Vector} alt="Vector"  /></div>
            <div className='basis-1/3 flex-1'><Image className='rounded-lg object-cover w-100% h-100%' layout="responsive"  src={Chatbud} alt="Chatbud"  /></div>
            <div className='basis-1/3 flex-1'><Image className='rounded-lg object-cover w-100% h-100%' layout="responsive"  src={WeatherApp} alt="WeatherApp"  /></div>
            <div className='basis-1/3 flex-1'><Image className='rounded-lg object-cover w-100% h-100%' layout="responsive" src={WebDesign} alt="WebDesign"  /></div>
            <div className='basis-1/3 flex-1'><Image className='rounded-lg object-cover w-100% h-100%' layout="responsive"  src={Shoes} alt="Shoes"  /></div>
            <div className='basis-1/3 flex-1'><Image className='rounded-lg object-cover w-100% h-100%' layout="responsive"  src={Pin} alt="Pintrest"  /></div>
            <div className='basis-1/3 flex-1'><Image className='rounded-lg object-cover w-100% h-100%' layout="responsive"  src={Diwali} alt="Diwali"  /></div>
            <div className='basis-1/3 flex-1'><Image className='rounded-lg object-cover w-100% h-100%' layout="responsive"  src={NewYear} alt="NewYear"  /></div>
          </div>
        </section>
        <section>
          <div className='flex justify-center text-5xl gap-16 py-4 mt-8 text-gray-600 dark:text-white'>
              <a href="https://github.com/vj1904"><AiFillGithub /></a>
              <a href="https://www.linkedin.com/in/vaibhav-jaiswal-739058205/"><AiFillLinkedin /></a>
              <a href="https://www.instagram.com/vaibhavjaiswal1904/"><AiFillInstagram /></a>
            </div>

            <footer className='w-full border-t-2 border-solid border-black font-medium text-lg'>
              <div className='py-8 flex items-center justify-between text-md text-gray-800 leading-8 mx-18 dark:text-white'>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <span>Build with 🖤 by Vaibhav</span>
                <a  href="mailto:stikemaster24@gmail.com?body=My custom mail body"> Say hello </a>
              </div>
            </footer>
        </section>
      </main>
    </div>
  )
}
