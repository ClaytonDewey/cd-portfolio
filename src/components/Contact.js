import React, { useState } from "react";
import FadeInSection from "./FadeInSection";
// https://ciunkos.com/creating-contact-forms-with-nodemailer-and-react
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const resetForm = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, subject, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    };
    let response = await fetch("https://claytondewey.io:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
    resetForm();
  };

  return (
    <FadeInSection>
      <section id="contact">
        <h2 className="section__title">
          Contact Me
          <br />
          <span>Get in Touch</span>
        </h2>
        <p className="text-center">
          I'm still working on getting my email server online. Until it's up and
          running, feel free to emaili me:
        </p>
        <p className="text-center">
          <a href="mailto:clay@dryadmedia.com" className="btn btn__primary">
            <i
              aria-label="mail icon"
              role="img"
              className="fas fa-envelope"
              style={{ marginRight: "1rem" }}
            ></i>{" "}
            clay@dryadmedia.com
          </a>
        </p>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__item form__item-half">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
              required
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="form__item form__item-half">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              required
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="form__item">
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              type="text"
              id="subject"
              required
            />
            <label htmlFor="subject">Subject</label>
          </div>
          <div className="form__item">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              id="message"
              rows="5"
              required
            ></textarea>
            <label htmlFor="message">Message</label>
          </div>
          <div className="form__button">
            <button type="submit" className="btn btn__primary">
              {status}
            </button>
          </div>
        </form>
      </section>
    </FadeInSection>
  );
};

export default Contact;
