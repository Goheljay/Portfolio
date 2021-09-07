import React from 'react'
import './css/App.css';
import './css/Skills.css';


const Skills = () => {
    return (
        <>
           <div className="skills" id="skills">
                <div className="container">
                    <h1 className="">My Skills</h1><br/><br/>
                    <div className="row">
                        <div className="col-md-6">
                            
                            <div className="bars">
                                <div className="info">
                                    <span>Java</span>
                                    <span>65%</span>
                                </div>
                                <div className="line java"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>Spring</span>
                                    <span>45%</span>
                                </div>
                                <div className="line spring"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>Android</span>
                                    <span>60%</span>
                                </div>
                                <div className="line android"></div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="bars">
                                <div className="info">
                                    <span>PHP</span>
                                    <span>70%</span>
                                </div>
                                <div className="line php"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span> Java Script</span>
                                    <span>60%</span>
                                </div>
                                <div className="line js"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span> MY SQl</span>
                                    <span>80%</span>
                                </div>
                                <div className="line mysql"></div>
                            </div>

                        </div>
                    </div>
                </div>
           </div> 
        </>
    )
}

export default Skills
