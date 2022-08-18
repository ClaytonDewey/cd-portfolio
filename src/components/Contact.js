import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="section__title">
        Contact Me
        <br />
        <span>Get in Touch</span>
      </h2>

      <form className="form" action="" method="POST">
        <div className="form__item form__item-half">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Name" required />
        </div>
        <div className="form__item form__item-half">
          <label htmlFor="emil">Email</label>
          <input type="email" id="email" placeholder="Email" required />
        </div>
        <div className="form__item">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" placeholder="Subject" required />
        </div>
        <div className="form__item">
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="message" required></textarea>
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
