import React from "react";

const date = new Date();
const getDate = date.getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright ⓒ {getDate}</p>
    </footer>
  );
}

export default Footer;
