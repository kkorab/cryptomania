import React, { useState } from 'react';

const withSettingsLogic = WrappedComponent => props => {
  const [isHidden, setIsHidden] = useState(true);
  const handleClick = () => {
    setIsHidden(!isHidden);
  };
  return (
    <div>
      <WrappedComponent
        {...props}
        handleClick={handleClick}
        isHidden={isHidden}
      />
    </div>
  );
};

export default withSettingsLogic;
