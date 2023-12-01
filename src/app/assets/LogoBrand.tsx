import { useEffect, useRef } from 'react';

interface Props {
  animate: boolean;
}

export default function ({ animate = false }: Props) {
  const brandRef = useRef<SVGSVGElement>(null);
  useEffect(() => {
    if (brandRef.current && animate) {
      setTimeout(() => brandRef.current?.classList.add('active'), 100);
    }
  }, [animate]);
  return (
    <svg
      ref={brandRef}
      xmlns="http://www.w3.org/2000/svg"
      width="110"
      height="25"
      fill="none"
      viewBox="0 0 110 25"
      className={!animate ? 'active' : ''}
    >
      <g clipPath="url(#clip0_101_89)">
        <path
          fill="#fff"
          stroke="#fff"
          strokeWidth="0.5"
          d="M.25 23.037V.25h3.7l11.7 14.986V4.017h-4.034L9.016.25h10.942v22.787h-4.311L3.947 8.462v14.575H.25z"
          className="svg-elem-1"
        ></path>
        <path
          fill="#fff"
          stroke="#fff"
          strokeWidth="0.5"
          d="M21.949.25h4.444v23.228h-4.444V.25z"
          className="svg-elem-2"
        ></path>
        <path
          fill="#fff"
          stroke="#fff"
          strokeWidth="0.5"
          d="M28.241.25h4.444v10.983L42.2.25h5.266L36.318 13.214l7.185 10.131h-5.685l-5.132-7.113v7.113h-4.444L28.241.25z"
          className="svg-elem-3"
        ></path>
        <path
          fill="#fff"
          stroke="#fff"
          strokeWidth="0.5"
          d="M45.798 23.345L60.718.756H64.7v22.589H54.168l2.369-4h4.181V9.06l-10.23 14.285h-4.69z"
          className="svg-elem-4"
        ></path>
        <path
          fill="#fff"
          stroke="#fff"
          strokeWidth="0.5"
          d="M85.509.755h4.239v22.62h-4.239V.755z"
          className="svg-elem-5"
        ></path>
        <path
          fill="#fff"
          stroke="#fff"
          strokeWidth="0.5"
          d="M83.277.825l-3.018 4.116s-4.018-.529-6.087 0-2.186 1.426-2.186 2.114c0 1.624 5.81 3.767 5.81 3.767s4.039 1.791 4.794 3.213c.449.837.77 1.737.955 2.669 0 0 .872 4.519-3.285 6.159-4.157 1.64-12.933.554-12.933.554l2.4-3.285a22.06 22.06 0 006.631 0c2.481-.616 3.295-1.56 3.295-2.463 0-2.053-2.812-3.007-2.812-3.007a41.456 41.456 0 01-4.383-1.858 13.516 13.516 0 01-3.285-2.392 5.968 5.968 0 01-.955-3.356 6.244 6.244 0 012.125-4.444c1.54-1.558 6.015-1.786 6.015-1.786l6.919-.001z"
          className="svg-elem-6"
        ></path>
        <path
          fill="#fff"
          stroke="#fff"
          strokeWidth="0.5"
          d="M108.584.825l-3.018 4.116s-4.018-.529-6.087 0-2.186 1.426-2.186 2.114c0 1.624 5.81 3.767 5.81 3.767s4.039 1.791 4.794 3.213a9.57 9.57 0 01.955 2.669s.872 4.519-3.285 6.159c-4.157 1.64-12.933.554-12.933.554l2.4-3.285a22.06 22.06 0 006.631 0c2.481-.616 3.295-1.56 3.295-2.463 0-2.053-2.812-3.007-2.812-3.007a41.492 41.492 0 01-4.383-1.858 13.516 13.516 0 01-3.285-2.392 5.968 5.968 0 01-.955-3.356 6.244 6.244 0 012.125-4.444c1.54-1.558 6.015-1.786 6.015-1.786l6.919-.001z"
          className="svg-elem-7"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_101_89">
          <path
            fill="#fff"
            d="M0 0H109.193V24.098H0z"
            className="svg-elem-8"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}
