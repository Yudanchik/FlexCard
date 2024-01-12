const React = require('react');
const Layout = require('./Layout');
const NavBar = require('./NavBar');

function HomePage({ title }) {
  return (
    <Layout title={title}>
      <NavBar />
      <img
        className="main__poster"
        style={{ width: '600px', marginLeft: '150px', marginTop: '10px' }}
        src="/img/main.png"
        alt=""
      />
    </Layout>
  );
}
module.exports = HomePage;
