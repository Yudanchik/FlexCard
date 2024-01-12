const React = require('react');
const Layout = require('./Layout');

function NavBar({ user }) {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <div class="navbar-brand" href="#">
          Привет User
        </div>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
                Registration Form
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/themes">
                Theme
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
module.exports = NavBar;
