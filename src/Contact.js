import React from 'react'
import './css/App.css';
import './css/Contact.css';


const Contact = () => {
    return (
        <>
        <section class="contact" id="contact">
            <div class="container">
                <h1 className="">Contact Me</h1><br/><br/>
                <div class="icon">
                    <a className="social-btn" href="https://www.youtube.com/channel/UC2LD7F4hhJ3v_0JLll6CslQ" target="_blank"><i className="fab fa-youtube"></i></a>
                    <a className="social-btn" href="https://www.facebook.com/darkcodest/" target="_blank"><i className="fab fa-facebook"></i></a>
                    <a className="social-btn" href="https://www.instagram.com/jaygohel_22_/" target="_blank"><i className="fab fa-instagram"></i></a>
                    <a className="social-btn" href="https://github.com/Goheljay" target="_blank"><i className="fab fa-github"></i></a>
                    <a className="social-btn" href="https://www.linkedin.com/in/gpheljay/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </section>
        </>
    )
}

export default Contact
