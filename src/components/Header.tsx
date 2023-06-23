const Header = () => {
  return (
    <div id='home'>
      <header className='header__index'>
        <div className='header__wrapper'>
          <div className='page-header'>
            <img
              src='img/profile.jpeg'
              alt=''
              className='header__image-profile'
              role='presentation'
            />
            <h1>Clayton Dewey</h1>
            <p className='subhead'>Front End Developer</p>
            <p className='text-center'>
              <i className='fab fa-jedi-order'></i>
            </p>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
