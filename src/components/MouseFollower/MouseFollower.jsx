import { useEffect, useState } from "react";

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const moveHandler = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    const hideHandler = () => setVisible(false);
    const showHandler = () => setVisible(true);

    window.addEventListener("mousemove", moveHandler);
    window.addEventListener("mouseout", hideHandler);
    window.addEventListener("mouseover", showHandler);

    return () => {
      window.removeEventListener("mousemove", moveHandler);
      window.removeEventListener("mouseout", hideHandler);
      window.removeEventListener("mouseover", showHandler);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-150 ease-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        transform: `translate(${position.x - 8}px, ${position.y - 8}px)`,
      }}
    >
      {/* Outer glow */}
      <div className="relative">
        <div className="w-5 h-5 bg-[#6BFDD9]/60 rounded-full blur-[6px] animate-pulse"></div>
        {/* Center core */}
        <div className="absolute top-[6px] left-[6px] w-2 h-2 bg-[#F0FF6C] rounded-full"></div>
      </div>
    </div>
  );
};

export default MouseFollower;
