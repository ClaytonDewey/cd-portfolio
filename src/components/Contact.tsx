const Contact = () => {
  return (
    <>
      <section id='contact'>
        <h2 className='section__title'>
          Contact Me
          <br />
          <span>Get in Touch</span>
        </h2>
        {/* <p className="text-center">
          I'm still working on getting my email server online. Until it's up and
          running, feel free to emaili me:
        </p> */}
        <p className='text-center'>
          <a href='mailto:clay@dryadmedia.com' className='btn btn__primary'>
            <i
              aria-label='mail icon'
              role='img'
              className='fas fa-envelope'
              style={{ marginRight: '1rem' }}></i>
            Get in Touch
          </a>
        </p>
      </section>
    </>
  );
};
export default Contact;
