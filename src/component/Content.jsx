import React, { useState } from 'react';

const Content = () => {
  const [displayText, setDisplayText] = useState('');

  const handleButtonClick = () => {
    // Perform any desired actions here before setting the display text
    setDisplayText('Text area content displayed below the button.');
  };

  return (
    <div>
      <textarea rows="4" cols="50" />
      <br />
      <button onClick={handleButtonClick}>Display Text</button>
      <p>{displayText}</p>
    </div>
  );
};

export default Content;
