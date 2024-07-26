import  { useState } from 'react';

const HoverButton = () => {
  // Initialize state to track hover
  const [isHovered, setIsHovered] = useState(false);

  // Define styles for hover and non-hover states
  const defaultStyle = {
    padding: '10px 20px',
    backgroundColor: 'gray',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const hoverStyle = {
    ...defaultStyle,
    backgroundColor: 'green',
  };

  // Event handlers for mouse enter and leave
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <button
      style={isHovered ? hoverStyle : defaultStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Hover
    </button>
  );
};

export default HoverButton;