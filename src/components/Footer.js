import React, { useState, useEffect } from "react";
// import { Icon } from "./icons";

const Footer = () => {
  const [githubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
  });

  useEffect(() => {
    fetch("https://api.github.com/repos/claytondewey/cd-portfolio")
      .then((res) => res.json())
      .then((json) => {
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <footer>
      <a href="https://github.com/claytondewey/cd-portfolio">
        <div>Designed &amp; Built by Clayton Dewey</div>

        {githubInfo.stars && githubInfo.forks && (
          <div className="github-stats">
            <span>
              {/* <Icon name="Star" /> */}
              <span>{githubInfo.stars.toLocaleString()}</span>
            </span>
            <span>
              {/* <Icon name="Fork" /> */}
              <span>{githubInfo.forks.toLocaleString()}</span>
            </span>
          </div>
        )}
      </a>
      <p>&copy; Copyright 2022</p>
    </footer>
  );
};

export default Footer;
