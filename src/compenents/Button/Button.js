import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function Btn({ value }) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <Button
      variant="primary"
      className="button__hire-us"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: isHover ? '#ffa1a1' : '#f44336',
        border: 0,
        color: 'white',
        fontSize: '16px',
        margin: '4px 2px',
        padding: ' 10px 40px',
        color: isHover ? '#393939' : 'aliceblue',
      }}
    >
      {value}
    </Button>
  );
}

export default Btn;
