import React from 'react';
import Header from './component/Header.jsx';
import Content from './component/Content.jsx';
import Footer from './component/Footer.jsx';

const App = () => {
  return (
    <div>
      <Header title="My Simple React Application" />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
