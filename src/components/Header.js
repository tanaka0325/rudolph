import React from "react";

const styles = {
  logo: {
    fontSize: "2rem"
  }
};

const Header = () => {
  return (
    <header>
      <nav className="deep-orange accent-3 z-depth-0" style={styles.logo}>
        <div className="container">
          <div className="nav-wrapper">
            <a href="/">rudolph</a>
            <ul id="nav-mobile" className="right hide-on-small-only">
              <li>
                <a href="/">test-link-1</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
