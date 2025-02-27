import React from 'react';
import './Contact.css';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "c0d72d49-3eee-4db0-ae23-08955b754c57");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message);
        }
    };

    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get In Touch</h1>
            </div>

            <div className="contact-section">
                {/* Left Side: Contact Info */}
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>
                        Whether you have a project idea, need coding help, or just want to connect, 
                        I'm always open to new opportunities. Reach out anytime!
                    </p>

                    <div className="contact-details">
                        <div className="contact-detail">
                            <Mail size={26} className="icon" />
                            <div>
                                <h3>Email</h3>
                                <p><a href="mailto:amsan5941@gmail.com">amsan5941@gmail.com</a></p>
                            </div>
                        </div>

                        <div className="contact-detail">
                            <Phone size={26} className="icon" />
                            <div>
                                <h3>Phone</h3>
                                <p><a href="tel:6478325941">+1 (647) 832-5941</a></p>
                            </div>
                        </div>

                        <div className="contact-detail">
                            <MapPin size={26} className="icon" />
                            <div>
                                <h3>Location</h3>
                                <p>Toronto, Ontario, Canada</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Contact Form */}
                <form onSubmit={onSubmit} className="contact-right">
                    <div className="form-group">
                        <label>Your Name</label>
                        <input type="text" placeholder='Enter Your Name' name='name' required />
                    </div>

                    <div className="form-group">
                        <label>Your Email</label>
                        <input type='email' placeholder='Enter Your Email' name='email' required />
                    </div>

                    <div className="form-group">
                        <label>Your Message</label>
                        <textarea name='message' rows="6" placeholder='Write your message here...' required></textarea>
                    </div>

                    <button type="submit" className="contact-submit">Submit Now!</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
