import React from 'react';

const Loading: React.FC = () => (
  <div className="flex justify-center items-center space-x-2 animate-pulse h-screen">
    <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
    <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
    <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
  </div>
);

export default Loading;
