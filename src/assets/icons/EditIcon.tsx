import * as React from 'react';

function EditIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={18}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.743.91a.833.833 0 011.179 0l4.167 4.167a.833.833 0 010 1.179L6.255 17.089a.833.833 0 01-.589.244H1.499a.833.833 0 01-.833-.833v-4.167c0-.22.088-.433.244-.589L11.743.911zM2.333 12.68v2.988H5.32l10-10-2.988-2.988-10 10z"
        fill="#2BAEE0"
      />
    </svg>
  );
}

export default EditIcon;
