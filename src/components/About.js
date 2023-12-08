const About = ({ Link }) => {
  return (
    <>
      <section id='about'>
        <h2 className='section__title'>
          About Me
          <br />
          <span>Clayton Dewey</span>
        </h2>
        <div className='content'>
          <article className='content__left-60 px-2'>
            <p>Hi. I'm Clayton</p>

            <p>
              I am a front-end web developer from Madison, WI. I am the full
              time developer and photographer for the{' '}
              <a href='https://www.uwbookstore.com/home'>
                University Book Store
              </a>
              , where I've been for the past 18 years.
            </p>

            <p>
              I am currently enrolled in the Front End Developer program at{' '}
              <a href='https://madisoncollege.edu/'>Madison College</a>, and I
              will be graduating in December 2023.
            </p>

            <p>
              When not working, or in class, I'm spending time with my daughter,
              listening to music, making pictures, or all of the above.
            </p>

            <div className='flex btn__container'>
              <Link
                to='contact'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                href='#contact'
                className='btn btn__primary'>
                Get In Touch
              </Link>
              <a
                href='./files/resume.pdf'
                target='_blank'
                className='btn btn__primary'>
                Download My Resume
              </a>
            </div>
          </article>
          <article className='content__right-40 px-2'>
            <img src='img/about.jpg' alt='' className='img-center img about' />
          </article>
        </div>

        <article className='mt-4'>
          <ul>
            <li>
              <a href='https://linkedin.com/in/claytondewey' className='mr-3'>
                <i className='fab fa-linkedin-in'></i>
                claytondewey
              </a>
            </li>
            <li>
              <a
                rel='me'
                href='https://mastodon.social/@ClaytonDewey'
                className='mr-3'>
                <i class='fa-brands fa-mastodon'></i>
                @ClaytonDewey
              </a>
            </li>
            <li>
              <a href='https://twitter.com/ClaytonDewey' className='mr-3'>
                <i className='fab fa-twitter'></i>
                @ClaytonDewey
              </a>
            </li>
            <li>
              <a href='https://instagram.com/dryadmedia' className='mr-3'>
                <i className='fab fa-instagram'></i>
                @DryadMedia
              </a>
            </li>
            <li>
              <a href='https://github.com/ClaytonDewey'>
                <i className='fab fa-github'></i>
                ClaytonDewey
              </a>
            </li>
          </ul>
        </article>
      </section>
    </>
  );
};
export default About;
