import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function getWindowOrientation() {
  const { orientation } = window.screen;
  return {
    orientation
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export function useOrientationChange() {
  const [windowOrientation, setWindowOrientation] = useState(getWindowOrientation());

  useEffect(() => {
    function handleChange() {
      setWindowOrientation(getWindowOrientation());
    }

    window.addEventListener('orientationchange', handleChange);
    return () => window.removeEventListener('orientationchange', handleChange);
  }, []);

  return windowOrientation;
}