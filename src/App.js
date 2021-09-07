import React, {useState} from 'react'
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';
import './css/App.css';
import Profile from './assets/img-5.png';
import images1 from './assets/partner-2.png';
import images2 from './assets/partner-3.png';
import images3 from './assets/partner-4.png';
import resume from './assets/My-Resume.pdf';


function App() {
  

 
  return (
      <>
        <Navbar/>
        <Home/>
        <div className="about" id="about">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img className="profile-photo" src={Profile} alt="" />
              </div>
              <div className="col-md-6">
                <div className="about-title">
                  About Me
                </div>
                <div className="about-desc">
                    This is JAY GOHEL, presenting my Portfolio. This is a Website for me to show what I have as a skills. If I tell something more about me then I'm a Graduated in Bachelor of Engineering Student with major in Computer Engineering studied at Sardar Pael Collage of Engineering, Bakrol, Anand ans Diploma major in Computer Engineering, S.B. Polytechnic, Savli, Vadodara. In terms of skills and Interest, I am proficient in Android App Developer in Java, Full Satck Web Developer, Open Source Enthusiast. 
                </div>
                <a className="hire" href={resume} download="quick" target="_blnk">Download CV</a>
              </div>
            </div>
          </div>
        <div className="img" id="img">
          <div className="container">
            <div className="row">
              <div className="col-md-4"><img className="img-fluid" src={images1} alt="" /></div>
              <div className="col-md-4"><img className="img-fluid" src={images2} alt="" /></div>
              <div className="col-md-4"><img className="img-fluid" src={images3} alt="" /></div>
            </div>
          </div>
        </div>
        </div>
        <div className="education" id="education">
          <div className="container">
              <h1 className="">Education</h1><br /><br />
          
              <div className="row">
                <div className="col-md-6">
                    <div className="card text-white  mb-3" >
                        <div className="card-body">
                            <p className="edu-year">2016</p>
                            <h4 className="card-title">X<sup>th</sup> Class(GSEB)</h4>
                            <p className="card-text">St. Xavier's High School, Umreth. (Anand)</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6"></div>
              </div>

              <div className="row">
                <div className="col-md-6"></div>
                <div className="col-md-6">
                  <div className="card text-white mb-3" >
                    <div className="card-body">
                            <p className="edu-year">2016-2019</p>
                            <h4 className="card-title">Diploma In Coumter Engineering</h4>
                            <p className="card-text">7.41 SPI - S.B. Polytechnic, Savli.(Vadodara)</p>
                            <p className="card-text-sub">Affiliated with Gujarat Technological University, Ahmedabad.</p>
                        </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                    <div className="card text-white  mb-3" >
                        <div className="card-body">
                            <p className="edu-year">2019-2022</p>
                            <h4 className="card-title">Bachlor of Computer Engineering</h4>
                            <p className="card-text">Sardar Patel Collage Of Engineering, Bakrol(Anand)</p>
                            <p className="card-text-sub">Affiliated with Gujarat Technological University, Ahmedabad.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6"></div>
              </div>
          </div>
        </div>
        <div className="services" id="services">
          <div className="container">
              <h1 className="">My Services</h1><br /><br />
            <div className="row">
              <div className="col-md-4 my-3">
                <div className="card">
                  <div class="card">
                    <div class="box">
                        <i class="fab fa-android"></i>
                        <div class="text">Android App developer</div>
                        <p class="desc m-3"> I am an Android app developer in <b>java</b>. I known all the java fundamentals. I known the mysql, sqlite, firebase connectivity in java. I also make app in android. currently i learn about Kotlin.</p>
                    </div>
                </div>
                </div>
              </div>
              <div className="col-md-4 my-3">
                <div class="card">
                    <div class="box">
                         <i class="fa fa-code" aria-hidden="true"></i>
                        <div class="text">Website Developer</div>
                        <p class="desc m-3">I am also a Web developer in <b>PHP</b> and <b>JavaScript</b>. I have made my college project in php. I have also design website in python with django framework with sqlite databse. </p> 
                    </div>
                </div>
              </div>
              <div className="col-md-4 my-3">
                <div class="card">
                    <div class="box">
                        <i class="fa fa-paint-brush" aria-hidden="true"></i>
                        <div class="text">Web Designer</div>
                        <p class="desc m-3">I am also a web designer. I design the website with HTML, CSS, Java Script. also design website in Photoshop and illustrator. currently I lern MERN Stack for web developing.</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Skills/>
        <Contact/>
        <Footer/>
        
      </>
  )
}

export default App;
