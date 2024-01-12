const React = require('react');
const Layout = require('./Layout');

function ThemesPage({ title, themes, user }) {
  return (
    <Layout title={title}>
      <h1>Themes Page</h1>
      <div className='cardTheme'>
        {themes.map((theme) => (
          <ThemeItem key={theme.id} theme={theme} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = ThemesPage;
