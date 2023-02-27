/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import img3 from "../images/img3.png";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import linkedin from "../images/icons8-linkedin.gif"
import insta from "../images/icons8-instagram.gif";
import fb from "../images/icons8-facebook.gif";
import youtube from "../images/icons8-youtube-logo.gif";
import twitter from "../images/icons8-twitter.gif";
// Import the functions you need from the SDKs you need

import { Component } from "react";
import Blink from 'react-blink-text';
import Font, { Text } from 'react-font';
import Shimmer from "react-shimmer-effect";

import { FaArrowCircleUp } from 'react-icons/fa';

import ScrollToTop from "react-scroll-to-top";



const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [visible, setVisible] = useState(false)


    


    return (
        <div>
            <ScrollToTop smooth
                viewBox="0 0 24 24"
                
                svgPath="m15.29 5.29-7 7L9.7 13.7 15 8.41V27h2V8.41l5.29 5.29 1.41-1.41-7-7a1 1 0 0 0-1.41 0z"
      />
            <nav className="bg-teal-800 h-20">
                <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8  py-0">
                    <div class="py-0">
                    <div class="float-left grid grid-flow-col">
                        <a href="/">
                            <img
                                className=""
                                src={img3}
                                height={75}
                                width={70}
                                alt="Workflow"
                            />
                            </a>
                            
                            <div class="py-5 px-3 text-2xl font-semibold text-stone-100">
                                Sri Sairam Institute of Technology</div>
                            </div>
                        </div>
                       
                    <div className="flex items-center justify-evenly h-16">
                        <div className="flex  justify-evenly float-left">
                            <div className="hidden md:block py-3">
                                <div className="ml-10 flex items-baseline space-x-4 text-base">
                                    <a
                                        href="#topics"
                                        className="text-gray-100 hover:bg-blue-800 hover:text-white px-3 py-2 rounded-md font-semibold"
                                    >
                                        Topics
                                    </a>
                                    
                                    <a
                                        href="#guidelines"
                                        className="text-gray-100 hover:bg-blue-800 hover:text-white px-3 py-2 rounded-md  font-semibold"
                                    >
                                        Guidelines
                                    </a>
                                    
                                    <a 
                                     
                                     href="#aboutclg"
                                        className="text-gray-100 hover:bg-blue-800 hover:text-white px-3 py-2 rounded-md  font-semibold"

                                     >
                                        About the College
                                    </a>
                                    <a
                                        href="#aboutdept"
                                        className="text-gray-100 hover:bg-blue-800 hover:text-white px-3 py-2 rounded-md  font-semibold"
                                    >
                                        About the Department
                                    </a>
                                    
                                    <motion.div 
                                        whileHover={{
                                            scale: 1.1,
                                            transition: { duration: 1 },
                                        }}
                                        whileTap={{ scale: 0.9 }}
                                     class="p-2 border-2 rounded-xl border-teal-200 shadow-sm shadow-white hover:bg-sky-500 hover:text-white">
                                        <a 
                                            href="https://forms.gle/WoYBzkdM7Jdfo5mE8"
                                        className="text-gray-100 text-xl px-3 py-2 rounded-md  font-medium"
                                    >
                                        Register
                                        </a></motion.div>
                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

                </nav>
            <motion.div class="bg-blue-300" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1.0 }}>
                <div class="py-1">
                    <section class="py-4 bg-sky-300 ">
                        <div class="grid grid-cols-1 sm:grid-cols-2  gap-10 items-center max-w-6xl mx-auto">
                            <div class="px-2 md:mr-6  p-10 border-red-400">
                                <h3 class="text-4xl pr-6 sm:leading-snug tracking-tight font-bold text-black">
                                    Department of Information Technology proudly presents
                                </h3>
                                <center class="py-8">
                                    <b class="text-7xl text-blue-600">NCRTCIT’23</b>
                                </center>
                                
                                <div class="transform md:rounded-md  bg-blue-400 rotate-0 scale-110 translate-x-25 md:shadow-2xl -ml-4  px-10 py-5 space-y-2">
                                    <text class="text-2xl text-black font-semibold ">
                                        <Font family='Lato'>
                                            <center><h3 class="py-1"><text class="text-5xl">5</text>th NATIONAL CONFERENCE ON <br /><br />  RECENT TRENDS IN COMPUTING <br />  AND INFORMATION TECHNOLOGY <br />on <br /> <b class="text-5xl text-blue-600">15 March 2023 AND 16 March 2023</b>
                                            </h3></center>
                                        </Font>

                                         </text>

                                </div>
                                

                            </div>
                            
                            <div class="px-10 py-3">

                                <div class="transform md:rounded-md  bg-teal-400 rotate-3 scale-110 translate-x-25 md:shadow-2xl -ml-4  p-9 space-y-2">

                                    <b class="text-2xl">DATES TO REMEMBER</b>
                                    <br /><br />
                                    <div class="grid grid-rows-3">
                                        <div class="text-xl"><text class="text-black font-bold">Submission</text> of full paper in IEEE format : <b><Blink color='blue' text='04.03.2023' fontSize='20'></Blink></b></div>
                                        <div class="text-xl"><text class="text-black font-bold">Acceptance</text> of Notification : <b><Blink color='blue' text='07.03.2023' fontSize='20'></Blink></b></div>
                                       
                                        <div class="text-xl">Last date to <text class="text-black font-bold">receive registration </text>
                                            form : <b>
                                                
                                                    <Blink color='blue' text='11.03.2023' fontSize='20'>
                                                        {/*11.03.2023 */}
                                                    </Blink>
                                                
                                                
                                                </b> along with DD </div>



                                    </div>

                                </div>
                            </div>
                        </div>
                    </section></div>

                <section class="relative pt-12 bg-blueGray-50">
                    <div class="items-center flex flex-wrap">
                        <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
                            <img alt="..." class="max-w-full rounded-lg shadow-lg" src={img1} />
                        </div>
                        <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
                            <div class="md:pr-12">

                                <h3 class="text-3xl font-semibold">In Association with</h3>
                                <div class="grid-flow-col grid">
                                    <div class="text-pink-600  text-center items-center justify-start w-16 h-16 rounded-full bg-blue-250 mt-8">
                                        <img src={img2} alt=""/>
                                    </div>


                                    <h3 class="text-5xl font-semibold py-10">Institutions of Engineering(India)</h3>
                                </div>


                            </div>
                        </div>
                    </div>
                    <br /><br /><br />
                </section>
                <center class="py-3 mt-11">
                    <motion.a
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 1 },
                        }}
                        whileTap={{ scale: 0.9 }}
                        href="https://forms.gle/WoYBzkdM7Jdfo5mE8"
                        class="w-full h-20 sm:w-auto  bg-orange-700 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 text-white rounded-xl inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">

                        <img src="https://img.icons8.com/plasticine/100/000000/form.png" alt="" />
                        <div class="text-left">
                            <div class="mb-1 text-2xl font-bold">Register for NCRTCIT’23</div>

                        </div>
                    </motion.a>
                </center>
            </motion.div>
            <div class="py-10 px-10" id="topics">
                <center class="text-3xl font-bold py-2">CALL FOR PAPERS</center>
                <br />

                <center class="w-3/3">
                    <div class="grid grid-cols-3 text-lg gap-14">
                        <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-2xl border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                            <div class="flex flex-col justify-center">
                                <p class="text-gray-900 dark:text-gray-300 font-semibold">Big Data in Real Life</p>
                            </div>
                        </div >

                        <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-2xl border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                            <div class="flex flex-col justify-center">
                                <p class="text-gray-900 dark:text-gray-300 font-semibold">Internet of Things</p>
                            </div>
                        </div >
                        <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-2xl  border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                            <div class="flex flex-col justify-center">
                                <p class="text-gray-900 dark:text-gray-300 font-semibold">Machine Learning & Deep Learning</p>
                            </div>
                        </div >
                        <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-2xl  border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                            <div class="flex flex-col justify-center">
                                <p class="text-gray-900 dark:text-gray-300 font-semibold">Image Processing</p>
                            </div>
                        </div >
                        <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-2xl border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                            <div class="flex flex-col justify-center">
                                <p class="text-gray-900 dark:text-gray-300 font-semibold">Mobile Communications & 5G Tech.</p>
                            </div>
                        </div >
                        <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-2xl  border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                            <div class="flex flex-col justify-center">
                                <p class="text-gray-900 dark:text-gray-300 font-semibold">Nano Technology</p>
                            </div>
                        </div >
                        <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-2xl  border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                            <div class="flex flex-col justify-center">
                                <p class="text-gray-900 dark:text-gray-300 font-semibold">Network Performance</p>
                            </div>
                        </div >
                        <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-2xl  border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                            <div class="flex flex-col justify-center">
                                <p class="text-gray-900 dark:text-gray-300 font-semibold">Natural Language Processing</p>
                            </div>
                        </div >
                        <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-2xl  border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                            <div class="flex flex-col justify-center">
                                <p class="text-gray-900 dark:text-gray-300 font-semibold">Innovative Networking Technologies</p>
                            </div>
                        </div >
                        <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-2xl  border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                            <div class="flex flex-col justify-center">
                                <p class="text-gray-900 dark:text-gray-300 font-semibold">Cognitive Computing</p>
                            </div>
                        </div >
                        <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-2xl   border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                            <div class="flex flex-col justify-center">
                                <p class="text-gray-900 dark:text-gray-300 font-semibold">Network Security</p>
                            </div>
                        </div >
                        <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-2xl  border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                            <div class="flex flex-col justify-center">
                                <p class="text-gray-900 dark:text-gray-300 font-semibold">Virtual & Augmented Reality</p>
                            </div>
                        </div >
                        <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-2xl  border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                            <div class="flex flex-col justify-center">
                                <p class="text-gray-900 dark:text-gray-300 font-semibold">Wireless Intelligent Networking</p>
                            </div>
                        </div >
                        <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-2xl  border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                            <div class="flex flex-col justify-center">
                                <p class="text-gray-900 dark:text-gray-300 font-semibold">BlockChain Technology</p>
                            </div>
                        </div >
                        <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-2xl  border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                            <div class="flex flex-col justify-center">
                                <p class="text-gray-900 dark:text-gray-300 font-semibold">Parallel and Distributed Computing</p>
                            </div>
                        </div >
                        <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-2xl  border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                            <div class="flex flex-col justify-center">
                                <p class="text-gray-900 dark:text-gray-300 font-semibold">Quantum Computing</p>
                            </div>
                        </div >
                        <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-2xl  border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                            <div class="flex flex-col justify-center">
                                <p class="text-gray-900 dark:text-gray-300 font-semibold">Data Analytics</p>
                            </div>
                        </div >
                        <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-2xl  border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                            <div class="flex flex-col justify-center">
                                <p class="text-gray-900 dark:text-gray-300 font-semibold">Edge Computing</p>
                            </div>
                        </div>
                        <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-2xl  border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                            <div class="flex flex-col justify-center">
                                <p class="text-gray-900 dark:text-gray-300 font-semibold">Cyber Security & AI</p>
                            </div>
                        </div >
                        <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-2xl  border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                            <div class="flex flex-col justify-center">
                                <p class="text-gray-900 dark:text-gray-300 font-semibold">Information Retrieval</p>
                            </div>
                        </div >
                        <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-2xl  border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                            <div class="flex flex-col justify-center">
                                <p class="text-gray-900 dark:text-gray-300 font-semibold">Cloud Computing & Application</p>
                            </div>
                        </div >
                        <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-2xl  border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                            <div class="flex flex-col justify-center">
                                <p class="text-gray-900 dark:text-gray-300 font-semibold">Data Mining & Warehousing</p>
                            </div>
                        </div >
                        <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-2xl  border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                            <div class="flex flex-col justify-center">
                                <p class="text-gray-900 dark:text-gray-300 font-semibold">Fuzzy Logic</p>
                            </div>
                        </div >
                        <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-2xl  border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                            <div class="flex flex-col justify-center">
                                <p class="text-gray-900 dark:text-gray-300 font-semibold">Human Computer Interaction</p>
                            </div>

                        </div >



                    </div>
                </center><br />
                <div class="text-2xl font-bold  float-right px-10 py-15">Topics included are not limited...</div>
                <br />
            </div>
            <div>

                <div class="py-10 px-10 bg-sky-500" id="guidelines">
                    <div class="p-8  border-8 border-green-400 bg-orange-400 rounded-xl">
                        <h1 class="text-2xl font-semibold text-gray-900 capitalize dark:text-white">Authors Guidelines :</h1>
                        <br />
                        <ol style={{ listStyleType: "upper-roman" }} class="px-10 text-lg font-medium">
                            <li>Papers are invited from UG/PG students .</li>
                            <li>All Paper submissions must embody unique and
                                unpublished work. Each submission will be peer reviewed
                                by programme committee members.</li>
                            <li> Submission of a paper should be regarded as an
                                undertaking and if the paper is accepted, then at least one
                                of the authors should register for the conference and
                                present the paper.</li>
                            <li>Maximum allowed pages while submitting camera ready
                                paper is 5.</li>
                            <li>The papers should be in IEEE format (with less than 20%
                                plagiarism).</li>
                            <li>Soft copy of the paper should be sent through
                                <br />Email Id :<a class="font-bold text-black" href="mailto:ncrtcit@sairamit.edu.in"> ncrtcit@sairamit.edu.in</a>
                                {/*<br />Website :<a class="font-extrabold" href="http://saitamitedu.in/incrtcit22/"> http://saitamitedu.in/incrtcit22/</a>*/}</li>
                                <br />Website :<a class="font-bold text-black" href={"http://sairamit.edu.in/incrtcit23/"}>  http://sairamit.edu.in/incrtcit23/</a>
                        </ol>

                    </div>
                    <br />
                    <div class="px-8 py-5  border-violet-800 border-8 rounded-xl bg-white">
                        <h1 class="text-2xl font-semibold text-black capitalize dark:text-white">Publication Details :</h1>
                        <br />
                        <h2 class="text-xl font-semibold">
                            All the accepted and presented papers will be included in the
                            following UGC-CARE(Group-1) Journals :
                        </h2>
                        <br />
                        <ol style={{ listStyleType: "upper-roman" }} class="px-10 text-lg font-medium">
                            <li> ICTACT Journal on Communication Technology</li>
                            <li>ICTACT Journal on Image and Video Processing</li>
                            <li> ICTACT Journal on Soft Computing</li>
                            <li>ICTACT Journal on Microelecronics</li>

                        </ol>

                    </div>
                    <br />
                    <div class="grid grid-flow-col" >
                        <div class="px-8 py-5  border-orange-200 border-8 rounded-xl bg-teal-300" >
                            <h1 class="text-2xl font-semibold text-black capitalize dark:text-white">Registration Fee Details :</h1>
                            <h5 class="text-2xl font-semibold text-black capitalize dark:text-white">Student(UG/PG)</h5>
                            <br />
                            <div class="">
                                <div class="grid grid-cols-3 text-xl font-semibold px-6">
                                    <pre>IEI members    :</pre>
                                    &nbsp;&nbsp;
                                    <text>₹ 250.00</text>
                                    <pre>Non IEI members:</pre>
                                    &nbsp;&nbsp;
                                    <text>₹ 450.00</text>
                                </div>
                            </div>
                        </div>
                        <div class="px-4"></div>
                        <div class="px-8 py-5  border-orange-200 border-8 rounded-xl bg-teal-300">
                            <h1 class="text-2xl font-semibold text-black capitalize dark:text-white">Mode of Payment : </h1>
                            <br />
                            <div class="text-xl font-medium">
                            Both Demand Draft (in favor of "The Institution of
Engineers(lndia), Kanchepuram Local Centre" payable at
Kanchepuram") and Cash (on spot registration) payments
accepted.

                            </div></div>
                    </div>
                </div>


                <br /><br /><br />
                <div class="bg-amber-300 py-10 max-w-full">
                    
                    <br />
                    
                    <br />
                    <div class="px-5 py-4 bg-teal-200">
                        <center class="text-3xl font-bold py-10">
                            <text class=" shadow-yellow-100">National Advisory Committee</text>
                        </center>
                        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 border-8 border-blue-400 p-10 rounded-xl ">
                            <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center content-start">
                                <div class="mb-8">
                                </div>
                                <div class="text-center">
                                    <p class="text-2xl text-gray-800 font-bold mb-2 py-3">Chairman:</p>
                                    <p class="text-lg text-gray-600 font-semibold">Dr.C.Debnath, FIE, President,IEI</p>
                                </div>
                            </div>
                            <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                                <div class="mb-8">
                                </div>
                                <div class="text-center">
                                    <p class="text-2xl text-gray-800 font-bold mb-2 py-3">Co-Chairman:</p>
                                    <p class="text-lg text-gray-600 font-semibold">Dr.Nirmal Das, FIE, Chairman, Computer Engineering Division Board, IEI</p>
                                </div>
                            </div>
                            <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                                <div class="mb-8">
                                </div>
                                <div class="text-center">
                                    <p class="text-2xl text-gray-800 font-bold mb-2 py-3">Convenor:</p>
                                    <p class="text-lg text-gray-600 font-semibold">Mr.R.Sundar, MIE,IEI-KLC</p>
                                </div>
                            </div>
                            <br/>
                            <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                                <div class="mb-8">
                                </div>
                                <div class="text-center">
                                    <p class="text-2xl text-gray-800 font-bold mb-2 py-3">Members:</p>
                                    <p class="text-lg text-gray-600 font-semibold">Prof (Dr)Chandrashekar S N, FIE, Member, CPDB,IEI</p>
                                    <p class="text-lg text-gray-600 font-semibold">Er Amit Kumar Das, FIE, Member, CPDB,IEI</p>
                                    <p class="text-lg text-gray-600 font-semibold">Dr.Labhwin, FIE, Member, CPDB,IEI</p>
                                    <p class="text-lg text-gray-600 font-semibold">Dr.G.Shanmugasundar, FIE Honorary Secretary, IEI-KLC </p>
                                    <p class="text-lg text-gray-600 font-semibold">Dr.Vijayakumar K, MIE, CPDB, IEI-KLC</p>
                                </div>
                            </div>
                            <br/>
                        </div>
                        </div>
                        <div class="px-5 py-4 bg-teal-200">
                        <center class="text-3xl font-bold py-10">
                            <text class=" shadow-yellow-100">Organizing Committee</text>
                        </center>
                        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 border-8 border-blue-400 p-10 rounded-xl ">
                            <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center content-start">
                                <div class="mb-8">
                                </div>
                                <div class="text-center">
                                    <p class="text-2xl text-gray-800 font-bold mb-2 py-3">Chairman:</p>
                                    <p class="text-lg text-gray-600 font-semibold">Prof (Dr) Elango D, FIE, National Council Member & Chairman IEI-KLC</p>
                                </div>
                            </div>
                            <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                                <div class="mb-8">
                                </div>
                                <div class="text-center">
                                    <p class="text-2xl text-gray-800 font-bold mb-2 py-3">Organizing Secretary:</p>
                                    <p class="text-lg text-gray-600 font-semibold">Dr.Shanmuga Sundar G, FIE,Honorary Secretary,IEI-KLC </p>
                                </div>
                            </div>
                            <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                                <div class="mb-8">
                                </div>
                                <div class="text-center">
                                    <p class="text-2xl text-gray-800 font-bold mb-2 py-3">Convenor:</p>
                                    <p class="text-lg text-gray-600 font-semibold">Dr. V.Brindha Devi,Professor & Head, Dept of Information Technology</p>
                                </div>
                            </div>
                            <br/>
                            <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                                <div class="mb-8">
                                </div>
                                <div class="text-center">
                                    <p class="text-2xl text-gray-800 font-bold mb-2 py-3">Patrons:</p>
                                    <p class="text-lg text-gray-600 font-semibold">Dr. Sai Prakash LeoMuthu, Chairman & CEO, Sairam Institutions</p>
                                    <p class="text-lg text-gray-600 font-semibold">Dr. Palanikumar K, Principal</p>
                                </div>
                            </div>
                            <br/>
                        </div>
                        </div><div class="px-5 py-4 bg-teal-200">
                        <center class="text-3xl font-bold py-10">
                            <text class=" shadow-yellow-100">Technical Committee</text>
                        </center>
                        <br/>
                        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 border-8 border-blue-400 p-10 rounded-xl ">
                            <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center content-start">
                                <div class="mb-8">
                                </div>
                                <div class="text-center">
                                    <p class="text-2xl text-gray-800 font-bold mb-2 py-3">Chairman:</p>
                                    <p class="text-lg text-gray-600 font-semibold">Dr. Palanikumar K, M.E., Ph.D., FIE, IEI-KLC, Principal-SIT</p>
                                </div>
                            </div>
                            <br/>
                            <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                                <div class="mb-8">
                                </div>
                                <div class="text-center">
                                    <p class="text-2xl text-gray-800 font-bold mb-2 py-3">Members:</p>
                                    <p class="text-lg text-gray-600 font-semibold">Dr. Brindha Devi V, M.E.,Ph.D.,MIE.IEI-KLC/ HOD-IT,SIT</p>
                                    <p class="text-lg text-gray-600 font-semibold">Dr. Muruga Radha Devi D, M.E.,Ph.D.,MIE,IEI-KLC- Professor - IT, SIT</p>
                                    <p class="text-lg text-gray-600 font-semibold">Dr. Nandhini J M, M.C.A ,M.Phil,M.Tech,Ph.D - Associate Professor - IT, SIT</p>
                                    <p class="text-lg text-gray-600 font-semibold">Mrs. Sharmila P, M.E.,(Ph.D).,MIE,IEI-KLC- Assistant Professor - IT, SIT</p>
                                </div>
                            </div>
                            <br/>
                        </div>
                        </div>

                </div>
                <footer class="bg-blue-400">
                    <br />

                    <center class="">

                        <div class="bg-orange-400 font-normal text-2xl text-center w-96 rounded-lg">
                            For Further Details,
                            <br />Contact :
                        </div>
                        <br />

                        <div class="">
                            <div class="text-xl font-bold">
                                Dr. G. Shanmugasundar, B.E,M.E,Ph.D.,FIE
                                <br />
                                Honorary Secretary, IEI-KLC, Chennai - 44.
                            </div>
                            <div class="text-xl font-semibold">
                                Department of Information Technology,<br />
                                Sri Sairam Institute of Technology,<br />
                                Chennai - 44. <br />Tel : +91 9941380398<br />
                                Mail: shanmugasundar.mech@sairamit.edu.in<br/>

                                <br />
                            </div>
                            <div class="text-xl font-bold">
                                Mrs. P.Sharmila, M.E.,(Ph.D).,MIE
                                <br />
                                Assistant Professor, Department of IT
                            </div>
                            <div class="text-xl font-semibold">
                                Sri Sairam Institute of Technology,<br />
                                Chennai - 44. <br />Tel : +91 9790822226<br />
                                Mail: sharmila.it@sairamit.edu.in<br/>

                                <br />
                            </div>
                        </div>
                    </center>

                </footer>
                <div class="py-10 px-10 bg-teal-200" id="aboutclg">
                
                    <div class="bg-white rounded-lg p-6" >
                        <center class="text-2xl font-bold">About the College</center>
                        <div>
                            <p class="text-gray-500 py-6 leading-loose font-semibold text-base">
                            Sri Sai Ram Institute of Technology is one of the prestigious
institutions that has been pioneered in the year 2008 by a great
Philanthropist, MJF.Ln.LEO MUTHU, Managing Director Of Leo Groups
of Companies in the name of "Sapthagiri Educational Trust. The
Institution has earned ISO 9001:2015 Certification, accredited by NAAC
With grade and CGPA Of 3.30. The institution is also accredited by
NBA for five departments. The institution provides an excellent mode
Of teaching-learning process and has a good record Of placement,
entrepreneurship and higher studies.
                                <img class="float-right py-0" src="https://img.icons8.com/external-others-cattaleeya-thongsriphong/50/000000/external-college-back-to-school-color-line-others-cattaleeya-thongsriphong-4.png" alt="college" />

                            </p>
                        </div>
                        </div>
                    <br />
                    

                    
                    <br />
                    <div id="aboutdept">
                    <div class="bg-white rounded-lg p-6" >
                        <center class="text-2xl font-bold" >About the Department</center>
                        <div>
                            <p class="text-gray-500  py-5 leading-loose font-semibold text-base">
                            The Department of Information Technology, established in the 
year 2008 with an intake of 60 students has now grown 
exemplarily with an admirable intake of 180 with 24highly 
dedicated faculty and 538 students. The department takes 
responsibility in organizing guest lectures, seminars, workshops 
and training programs with the help of engineers and 
academicians of National and International organizations, in 
order to help the students abreast with the latest developments 
in the field of information technology. Students are made to 
embolden the future technology and master the art of computing 
by encouraging them to think like futuristic for catalyzing 
Research and Research related activities through the Research 
and Development cell. As a result of various Research activities, 
numerous students from the Department of Information 
Technology have been placed their foot prints in esteemed 
International and National forum
                                <img class="float-right py-0" src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/50/000000/external-laptop-multimedia-kiranshastry-lineal-color-kiranshastry-1.png" alt="" />

                            </p>
                        </div>
                        </div>
                        </div>
                    <br />
                    <div id="aboutdept">
                    <div class="bg-white rounded-lg p-6" >
                        <center class="text-2xl font-bold" >About the Institutions of Engineering(India)</center>
                        <div>
                            <p class="text-gray-500  py-5 leading-loose font-semibold text-base">
                            The Institution of Engineers (India) or IEI is the Largest multi
disciplinary professional body that encompasses 15 engineering
disciplines and gives engineers a global platform from which to
share professional interest, IEI has membership strength Of over
0.8 million. Established in 1920, with its headquarters at 8
Gokhale Road, Kolkata - 700020, IEI has served the engineering
fraternity for over nine decades, In this period of time it has been
inextricably linked with the h istory of modern-day engineering.

In 1935, IEI was incorporated by Royal Charter and remains the
only professional body in India which has been accorded this
honour. Today, its quest for professional excellence has given it a
place of pride in almost every prestigious and relevant
organization across the globe. It provides a vast array of
technical, professional and supporting services to the
Government, Industries, Academia and the Engineering
fraternity, operating through its 123 Centres located across the
country and 6 overseas chapters. Besides, IEI has bilateral
agreements with about 31 international bodies and membership
of another 8 international bodies of the developed nations across
the globe.

Being recognized as a Scientific and Research Organisation (SlRO)
by the Department Of Scientific and Industrial Research, Ministry
of Science and Technology, Government of India, IEI promotes the
cause of research and development by providing Grant in-Aid
support to undergraduate, post graduate students and PhD
Research Scholars of Engineering Institutions and Universities.
IEI conducts Section A & B Examinations in various engineering
disciplines (popularly known as AMIE examination), the
successful completion Of which is recognized as equivalent to
Degree in appropriate field of Engineering of recognized
Universities Of India by the Ministry Of Human Resources
Development, Government of India. Every year as many as 90000
candidates appear for these exams. IEI in collaboration with
Springer regularly publishes peer-reviewed international journal
in five series, namely, Series A, Series B, Series C, Series D and
Series E covering fifteen engineering discipline.
                                <img class="float-right py-0" src="" alt="" />

                            </p>
                        </div>
                        </div>
                        </div>
                    <br />
                </div>

            </div>
            <footer>
                <div class="bg-orange-300 py-7">
                    <center><text class="text-3xl font-bold text-red-500">
                        Sri Sairam Institute of Technology
                    </text>
                    <div class="text-green-700 text-2xl font-semibold">Sai Leo Nagar,
                            West Tambaram,<br />
                            Chennai-600044
                    </div>
                        <div class="text-green-700 text-2xl font-semibold">  Phone : +91-44-22512111 / 2251 2333 / 22512444</div>
                   

                        <div class="text-2xl text-green-700  font-semibold">Mail : sairam@sairamit.edu.in</div>

                    <div class=" py-6 grid grid-flow-col justify-center gap-8 ">
                            <a href="https://www.linkedin.com/company/sairamit-information-technology/"><img class="bg-teal-700" src={linkedin} alt="linkedin" height={50} width={50} /></a>
                            <a href="https://www.facebook.com/sairamitit"><img src={fb}  alt="linkedin" height={50} width={50} /></a>
                            <a href="https://twitter.com/sairam_IT" ><img src={twitter} alt="twitter" height={50} width={50} /></a>
                            <a href="https://www.instagram.com/sairam_it/"><img src={insta} alt="instagram" height={50} width={50} /></a>
                            <a href="https://www.youtube.com/c/SairamInstitutions"><img src={youtube} alt="linkedin" height={50} width={50} /></a>
                            
                    </div>

                    </center>
                </div>
            </footer>
           
            
        </div>
    );
}
export default Nav;