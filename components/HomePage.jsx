const React = require('react');
const Layout = require('./Layout');
const NavBar = require('./NavBar');

function HomePage({ title }) {
  return (
    <Layout title={title}>
      <NavBar />
    </Layout>
  );
}
module.exports = HomePage;
