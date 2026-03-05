import React from 'react'

const Grid = () => {
  return (
    <div
      className="absolute inset-0 opacity-40 pointer-events-none"
      style={{
        backgroundImage: `radial-gradient(rgba(108, 43, 238, 0.9) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }}
    />
  );
}

export default Grid