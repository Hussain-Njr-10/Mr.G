import { ReactLenis } from 'lenis/react';

const LenisProvider = ({ children }) => {
  return (
    <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
};

export default LenisProvider;
