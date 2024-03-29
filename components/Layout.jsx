const React = require('react');
const NavBar = require('./NavBar');

function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link
          href="/style/bootstrap.css"
          rel="stylesheet"
          crossOrigin="anonymous"
        ></link>
        <script defer src="/scripts/regScript.js" />
        <script defer src="/scripts/sendScript.js" />
      </head>
      <body>{children}</body>
    </html>
  );
}

module.exports = Layout;
