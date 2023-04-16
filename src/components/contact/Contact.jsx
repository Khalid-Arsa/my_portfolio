import { useState, useRef } from "react";
import "./contact.scss";
import emailjs from "emailjs-com";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Contact() {
  const formRef = useRef()

  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_7xjxtvm",
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
        <div className="form-container">
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
        <div className="icon-container">
          <a href="https://www.linkedin.com/in/khalid-arsa-9755601aa/">
            <LinkedInIcon className='icon' />
          </a>
          <a href="https://www.facebook.com/Ilovekia2019">
            <FacebookIcon className='icon' />
          </a>
          <a href="https://github.com/Khalid-Arsa">
            <GitHubIcon className='icon' />
          </a>
        </div>
      </div>
    </div>
  );
}