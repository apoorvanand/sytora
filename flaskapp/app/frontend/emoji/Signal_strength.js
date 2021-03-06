import React from 'react';

export default function Signal_strength(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" width={64} height={64} {...props}>
      <circle cx={32} cy={32} r={30} fill="#4fd1d9" />
      <g fill="#fff">
        <path d="m44 16h6v32h-6z" />
        <path d="m34 24h6v24h-6z" />
        <path d="m24 32h6v16h-6z" />
        <path d="m14 40h6v8h-6z" />
      </g>
    </svg>
  );
}
