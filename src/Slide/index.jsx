import React, { useEffect, useState } from 'react';
import SlidingDiv from './styles';

const Slide = ({ show, children, direction, width }) => {
  const [shouldRender, setRender] = useState(show);

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  return (
    shouldRender && (
      <SlidingDiv
        show={show}
        width={width}
        direction={direction}
        onAnimationEnd={onAnimationEnd}
      >
        {children}
      </SlidingDiv>
    )
  );
};

export default Slide;