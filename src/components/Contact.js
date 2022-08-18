import React, { useState } from "react";
import axios from "axios";
// https://ciunkos.com/creating-contact-forms-with-nodemailer-and-react
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const data = { name, email, subject, message };

  const onNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const onMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const submitEmail = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "/send",
      data: data,
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <section id="contact">
      <h2 className="section__title">
        Contact Me
        <br />
        <span>Get in Touch</span>
      </h2>

      <form className="form" onSubmit={() => submitEmail()} method="POST">
        <div className="form__item form__item-half">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={(e) => onNameChange(e)}
            placeholder="Name"
            required
          />
        </div>
        <div className="form__item form__item-half">
          <label htmlFor="emil">Email</label>
          <input
            type="email"
            id="email"
            onChange={(e) => onEmailChange(e)}
            placeholder="Email"
            required
          />
        </div>
        <div className="form__item">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            onChange={(e) => onSubjectChange(e)}
            placeholder="Subject"
            required
          />
        </div>
        <div className="form__item">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            onChange={(e) => onMessageChange(e)}
            placeholder="message"
            required
          ></textarea>
        </div>
        <div className="form__button">
          <button type="submit" className="btn btn__primary">
            Send
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
