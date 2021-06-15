const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar navbar-dark bg-dark fixed-top">
        <div className="container container-fluid">
          <a className="navbar-brand mr-4" href="/">
            PyBlog
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggle"
            aria-controls="navbarToggle"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarToggle">
            <div className="navbar-nav mr-auto"></div>

            <div className="navbar-nav">
              <a className="nav-item nav-link" href="">
                Home
              </a>
              <a className="nav-item nav-link" href="">
                About
              </a>
              <a className="nav-item nav-link" href="">
                Publish
              </a>

              <li className="nav-item dropdown">
                <a
                  className="dropdown-toggle ml-1 text-light"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img className="rounded-circle w-100 h-100" src="" />
                </a>
                <div
                  className="dropdown-menu bg-dark"
                  aria-labelledby="navbarDropdown"
                >
                  <a className="dropdown-item text-light" href="">
                    Account
                  </a>
                  <a className="dropdown-item text-light" href="">
                    Posts
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item text-light" href="">
                    Sign Out
                  </a>
                </div>
              </li>

              <a
                className="nav-item nav-link btn btn-outline-light ml-2"
                href=""
              >
                Sign In
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
