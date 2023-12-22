import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

const Card = (props) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    try {
      navigator.clipboard.writeText(props.colorcode);
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    } catch (error) {
      console.error('Error copying to clipboard', error);
    }
  };

  return (
    <div>
      <div onClick={copyToClipboard} id='card' style={{ backgroundColor: props.color }}></div>
      <CopyToClipboard onCopy={() => setIsCopied(true)}>
        <h3>{props.colorcode}</h3>
      </CopyToClipboard>
      {isCopied && <span style={{ color: 'white', fontSize: '20px', fontWeight: 'bolder' }}>Copied &#9989;</span>}
    </div>
  );
};

export default Card;