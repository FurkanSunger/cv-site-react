import React, { useContext } from 'react'
import { FaCheckCircle, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import MainContext from '../../context/MainContext'
import { ContactForm, ContactIcon, ContactInfo, ContactItem, ContactLists, ContactTitle, FormButton, FormInput, FormTextarea, Title } from './Contact.element'
import emailjs from "emailjs-com";

const Contact = () => {
    const {userInfo} = useContext(MainContext);
    const {city, phone, email} = userInfo;

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_v9cemyh', 'template_iz2rn99', e.target, 'user_F2m28ua8pMW5R5FQrUKO3')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        })

        e.target.reset();
    }

    return (
        <div className="contact position-absolute end-0 col-lg-8 col-sm-10 col-10 m-0">
            <div className="container">
                <Title>Contact</Title>
                <div className="row">
                    <div className="col-lg-4 col-sm-12">
                        <ContactLists>
                            <ContactItem>
                                <ContactIcon><FaMapMarkerAlt /></ContactIcon>
                                <ContactInfo>{city}</ContactInfo>
                            </ContactItem>
                            <ContactItem>
                                <ContactIcon><FaPhone /></ContactIcon>
                                <ContactInfo>{phone}</ContactInfo>
                            </ContactItem>
                            <ContactItem>
                                <ContactIcon><FaEnvelope /></ContactIcon>
                                <ContactInfo>{email}</ContactInfo>
                            </ContactItem>
                            <ContactItem>
                                <ContactIcon><FaCheckCircle /></ContactIcon>
                                <ContactInfo>Freelance Available</ContactInfo>
                            </ContactItem>
                        </ContactLists>
                    </div>
                    <div className="col-lg-8 col-sm-12">
                        <ContactTitle>How Can I Help You?</ContactTitle>
                        <ContactForm id="form1" autoComplete="off" onSubmit={sendEmail}>
                            <FormInput name="name" type="text" className="fullname" id="fullname" placeholder="Full Name" required />
                            <FormInput name="email" type="email" className="email" id="email" placeholder="Email Address" required />
                            <FormInput name="subject" type="text" className="subject" id="subject" placeholder="Subject" required />
                            <FormTextarea name="message" placeholder="Message" required></FormTextarea>
                            <FormButton>Send Message</FormButton>
                        </ContactForm>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
