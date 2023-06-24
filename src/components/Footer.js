// import React, { useEffect, useState } from 'react';
// import { Icon } from './icons';

const Footer = () => {
  // const [githubInfo, setGithubInfo] = useState<any>({
  //   stars: null,
  //   forks: null,
  // });

  // useEffect(() => {
  //   fetch('https://api.github.com/repos/claytondewey/cd-portfolio')
  //     .then((res) => res.json())
  //     .then((json) => {
  //       const { stargazers_count, forks_count } = json;
  //       setGithubInfo({
  //         stars: stargazers_count,
  //         forks: forks_count,
  //       });
  //     })
  //     .catch((e) => console.error(e));
  // }, []);

  const year = new Date().getFullYear();
  return (
    <footer>
      {/* <a href='https://github.com/claytondewey/cd-portfolio'>
        <div>Designed &amp; Built by Clayton Dewey</div>

        {githubInfo.stars && githubInfo.forks && (
          <div className='github-stats'>
            <span>
              <Icon name='Star' />
              <span>{githubInfo.stars.toLocaleString()}</span>
            </span>
            <span>
              <Icon name='Fork' />
              <span>{githubInfo.forks.toLocaleString()}</span>
            </span>
          </div>
        )}
      </a> */}
      <p>&copy; Copyright {year}</p>
      <p className='my-2'>
        <a
          href='https://www.buymeacoffee.com/claytondewey'
          rel='noreferrer'
          target='_blank'>
          <img
            alt='Buy me a coffee'
            src='https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=claytondewey&button_colour=167979&font_colour=ffffff&font_family=Poppins&outline_colour=ffffff&coffee_colour=FFDD00'
          />
        </a>
      </p>
    </footer>
  );
};

export default Footer;
