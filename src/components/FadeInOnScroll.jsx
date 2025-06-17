// FadeInOnScroll.jsx
import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";

const FadeInOnScroll = ({ children, id = "", delay = 0 }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(50px)",
    delay,
    config: { mass: 1, tension: 170, friction: 20 },
  });

  return (
    <animated.div ref={ref} id={id} style={animation}>
      {children}
    </animated.div>
  );
};

export default FadeInOnScroll;
