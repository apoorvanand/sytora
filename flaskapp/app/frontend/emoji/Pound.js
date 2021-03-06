import React from 'react';

export default function Pound(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" width={64} height={64} {...props}>
      <path fill="#9450e0" d="m0 46.5h64v9h-64z" />
      <path fill="#c28fef" d="m0 8.5h64v38h-64z" />
      <path fill="#94989b" d="m24 46.5h16v9h-16z" />
      <path fill="#9450e0" d="m4 12.5h56v30h-56z" />
      <path fill="#c28fef" d="m7 15.5h50v24h-50z" />
      <circle cx={45} cy="27.5" r={8} fill="#9450e0" />
      <path fill="#d0d0d0" d="m24 8.5h16v38h-16z" />
      <path d="m16 30.4c0-.3 0-.6-.1-1h2.9v-2.4h-4.1c-.1-.1-.1-.1-.1-.2-.1-.2-.3-.4-.4-.5-.6-.8-.9-1.2-.9-1.9 0-1.5 1.2-2.7 2.8-2.7 1.5 0 2.8 1.2 2.8 2.7h2.1c0-2.7-2.2-4.9-5-4.9-2.8 0-5 2.2-5 4.9 0 1.1.5 1.9 1 2.6h-1v2.3h2.5c.2.5.2.8.2 1 0 1.8-1.8 2.9-2.8 3v2.2h10v-2.2h-6c.7-.8 1.1-1.8 1.1-2.9" fill="#fff" />
    </svg>
  );
}
