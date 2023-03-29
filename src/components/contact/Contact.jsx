import { useState, useRef } from "react";
import "./contact.scss";
import emailjs from "emailjs-com";

export default function Contact() {
    const [message, setMessage] = useState(false);

    const formRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_825vwni",
                "template_3g311wn",
                formRef.current,
                "user_X5CbXOTrmfPldpaOIrpkK"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setMessage(true)
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" name="user_name" />
                    <input type="text" placeholder="Subject" name="user_subject" />
                    <input type="text" placeholder="Email" name="user_email" />
                    <textarea placeholder="Message" name="message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I'll reply ASAP :)</span>}
                </form>
            </div>
        </div>
    );
}