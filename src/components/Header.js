import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/Container';

const Header = () => {
  return (
    <header>
      <Container type="content">
        <p> COVID-19 Live Tracker With Data Visualization </p>
        <ul>
          <li>
            <Link to="/page-2/">About</Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
