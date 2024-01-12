const React = require('react');
const Layout = require('./Layout');
const ThemeItem = require('./ThemeItem');

function ThemesPage({ title, themes, user }) {
  return (
    <Layout title={title}>
      <h1>Themes Page</h1>
      <div
        className="cardTheme"
        style={{
          marginTop: '100px',
          display: 'flex',
          pedding: '50px',
          justifyContent: 'space-around',
          width: '1000px',
        }}
      >
        {themes.map((theme) => (
          <ThemeItem key={theme.id} theme={theme} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = ThemesPage;
