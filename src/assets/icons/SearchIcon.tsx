import * as React from 'react';

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.2 5.6a5.6 5.6 0 100 11.2 5.6 5.6 0 000-11.2zM4 11.2a7.2 7.2 0 1114.4 0 7.2 7.2 0 01-14.4 0z"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.155 15.154a.8.8 0 011.131 0l3.48 3.48a.8.8 0 01-1.131 1.132l-3.48-3.48a.8.8 0 010-1.132z"
        fill="#737373"
      />
    </svg>
  );
}

export default SearchIcon;
