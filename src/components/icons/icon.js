import React from "react";
import PropTypes from "prop-types";
import {
  IconAppStore,
  IconBookmark,
  IconExternal,
  IconFork,
  IconGitHub,
  IconLinkedin,
  IconStar,
  IconTwitter,
} from "./icon.js";

const Icon = ({ name }) => {
  switch (name) {
    case "AppStore":
      return <IconAppStore />;
    case "Bookmark":
      return <IconBookmark />;
    case "External":
      return <IconExternal />;
    case "Fork":
      return <IconFork />;
    case "GitHub":
      return <IconGitHub />;
    case "Linkedin":
      return <IconLinkedin />;
    case "Star":
      return <IconStar />;
    case "Twitter":
      return <IconTwitter />;
    default:
      return <IconExternal />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
