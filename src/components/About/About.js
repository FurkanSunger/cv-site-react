import React, { useContext } from 'react'
import { VscFileCode } from "react-icons/vsc";
import MainContext from '../../context/MainContext';
import { AboutDesc, AboutInfo, AboutItem, AboutTitle, AboutWrapper, ServiceDesc, ServiceIcon, Services, ServicesTitle, ServiceTitle } from './About.element';

const About = () => {
    const {userInfo} = useContext(MainContext);
    const {about, age, email, phone, residence, services} = userInfo;
    
    return (
        <div className="about position-absolute end-0 light-dark-bg col-lg-8 col-sm-10 col-10 m-0">
            <div className="container">
                <div className="container">
                    <div className="row">
                        <AboutTitle>About Me</AboutTitle>
                        <div className="col-lg-6">    
                            <AboutDesc>{about}</AboutDesc>
                        </div>
                        <div className="col-lg-6">
                            <AboutInfo>
                                <AboutItem>
                                    <span>Age: </span> {age}
                                </AboutItem>
                                <AboutItem>
                                    <span>Residence: </span> {residence}
                                </AboutItem>
                                <AboutItem>
                                    <span>E-mail: </span> {email}
                                </AboutItem>
                                <AboutItem>
                                    <span>Phone: </span> {phone}
                                </AboutItem>
                            </AboutInfo>
                        </div>
                    </div>
                </div>
                
                <Services>
                    <div className="container">
                        <ServicesTitle>What I Do</ServicesTitle>
                        <div className="row">
                            {
                                services.map(service => (
                                    <div key={service.id} className="col-lg-6">
                                        <ServiceIcon><VscFileCode /> </ServiceIcon>
                                        <ServiceTitle>{service.serviceTitle}</ServiceTitle>
                                        <ServiceDesc>{service.serviceDescription}</ServiceDesc>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </Services>
            </div>
        </div>
    )
}

export default About
