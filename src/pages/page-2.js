import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';

const SecondPage = () => {
  return (
    <Layout pageName="two">
      <Helmet>
        <title>About</title>
      </Helmet>
      <Container type="content" className="text-center">
        <h1>About</h1>
        <p>Technologies Used: Gatsby, React Hooks, API, Netlify </p>
      </Container>
    </Layout>
  );
};

export default SecondPage;
