import { useState } from 'react';

export const Expandable = ({ children }) => {
  const [isShowing, setIsShowing] = useState(false);

  const toggleShowing = () => {
    setIsShowing((currentShowing) => {
      return !currentShowing;
    });
  };

  return (
    <div>
      <button className="expandable-btn" onClick={toggleShowing}>
        {isShowing ? '-' : '+'}
      </button>
      {isShowing && children}
    </div>
  );
};
