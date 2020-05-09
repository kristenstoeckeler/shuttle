import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div>
    <div>
      <h2>Technologies</h2>
      <h3>React</h3>
      <h3>Redux</h3>
      <h3>Node.js</h3>
      <h3>Express</h3>
      <h3>PostgreSQL</h3>
      <h3>Material UI</h3>
    </div>
  </div>
);

export default AboutPage;
