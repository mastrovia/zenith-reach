import React from 'react';

const Loader = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="relative size-16">
        <div className="absolute inset-0 rounded-full border-4 border-primary/30"></div>
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-primary border-t-secondary"></div>
      </div>
    </div>
  );
};

export default Loader;
