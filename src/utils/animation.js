export const slideUpAnim = (delay) => {
  return {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, delay: delay },
    },
  };
};

export const slideRTLAnim = (delay) => {
  return {
    hidden: { opacity: 0, x: 150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.75, delay: delay },
    },
  };
};

export const slideLTRAnim = (delay) => {
  return {
    hidden: { opacity: 0, x: -150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.75, delay: delay },
    },
  };
};

export const scaleAnim = (delay, duration) => {
  return {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: duration, delay: delay },
    },
  };
};

export const slideDownAnim = (delay) => {
  return {
    hidden: { opacity: 0, y: -150, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.75, delay: delay },
    },
  };
};

export const slideDownNavAnim = () => {
  return {
    hidden: { y: -300 },
    visible: {
      y: 0,

      transition: { duration: 0.2 },
    },
  };
};
