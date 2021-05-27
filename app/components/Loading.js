import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const styles = {
  content: {
    fontSize: "35px",
    position: "absolute",
    left: "0",
    right: "0",
    marginTop: "20px",
    textAlign: "center",
  },
};

export default function Loading({ speed = 300, text = "Loading" }) {
  const [content, setContent] = useState(text);

  useEffect(() => {
    const id = window.setInterval(() => {
      // content === `${text}...`
      //   ? setContent(text)
      //   : setContent((content) => `${content}.`);

      setContent((content) => {
        return content === text + "..."
          ? text
          : content + "."
      })

    }, speed);

    return () => window.clearInterval(id);
  }, [speed, text]);

  return <p style={styles.content}>{content}</p>;
}

Loading.propTypes = {
  text: PropTypes.string,
  speed: PropTypes.number,
};
