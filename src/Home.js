import React from 'react'
import './css/profile.css'
import profile from './assets/profile.JPG';
import Typewriter from 'typewriter-effect';


const Home = () => {

    

    return (
        <div>
            <div className="home" id="home">
                <div className="container home-data">
                    <div className="home-content">
                    <div class="text-1">Hello, my name is</div>
                        <div class="text-2">Jay Gohel</div>
                        <div class="text-3">And I'm a<span> <Typewriter
                            options={{
                                strings: ["Android App Developer", "Open Source Enthusiast", "Web Developer", "Web Designer"],
                                autoStart: true,
                                loop:true,
                            }}
                        /></span></div>
                        <a class="hire" href="mailto:gohel.jay177@gmail.com">Hire me</a>
                    </div>
                    <div className="home-img">
                    <img className="profile" src={profile} alt=""/>
                    </div>            
                </div>
            </div>
        </div>
    )
}

export default Home
