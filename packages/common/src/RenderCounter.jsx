import { useRef, useEffect } from 'react';

function RenderCounter() {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current != null) {
      ref.current.textContent = Number(ref.current.textContent || '0') + 1;
    }
  });

  return (
    <span
      className="render-counter absolute h-6 w-6 inline-flex items-center justify-center bg-red-600 bg-opacity-70 cursor-default text-center text-white"
      ref={ref}
    />
  );
}

export default RenderCounter;
