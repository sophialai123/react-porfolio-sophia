import React from 'react';
import "./Contact.css";
import { MdOutlineMail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";

function Contact() {
  return (
    <section id="contact">
      <div className='contact-title'>
        <h2>Contact Me</h2>
      </div>


      <div className='container contact-container'>
        <div className='contact-options'>
          <article className='contact-option'>
            <a href='mailto:sophia852686@gmail.com' target="_blank"> <MdOutlineMail className='contact-icon' /></a>
            <h4>Email</h4>
            <h5>sophia852686@gmail.com</h5>
            <a href='mailto:sophia852686@gmail.com' target="_blank">Send Email</a>
          </article>

          <article className='contact-option'>
            <a href='https://m.me/pingping.lai2' target="_blank"><BsMessenger className='contact-icon' /></a>
            <h4>Messenger</h4>
            <a href='https://m.me/pingping.lai2' target="_blank">Send Messages</a>
          </article>

        </div>
        <form action=''>
          <input type="text" placeholder="Enter your name ..." required />
          <input type="email" placeholder="Enter your email ..." required />
          <textarea name='message' rows="7" placeholder="Enter your messages ..." required />
          <button type="submit" className='btn btn primary'>Send Message</button>
        </form>

      </div>
    </section>
  );
}

export default Contact;


