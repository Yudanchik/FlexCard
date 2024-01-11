const React = require('react');
 function Layout({ title, children }) {
return (
 <html lang="en">
 <head>
 <title>{title}</title>
 <link href="/style/bootstrap.css" rel="stylesheet" crossOrigin="anonymous"></link>
 <script defer href=""></script>
 </head>
 <body>{children}</body>
 </html>
 );
};

module.exports = Layout