import React from 'react';

interface ButtonProps {
  onClick: () => void;  // Function to handle the click event
  label: string;        // The text to display on the button
}

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <button onClick={onClick} >
      {label}
    </button>
  );
};

export default Button;
