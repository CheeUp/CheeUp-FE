interface PBookmarkIcon extends React.SVGProps<SVGSVGElement> {
  filled: boolean;
}

const BookmarkIcon: React.FC<PBookmarkIcon> = ({ filled }) => {
  return filled ? (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M4.16602 17.5V4.16667C4.16602 3.70833 4.32935 3.31611 4.65602 2.99C4.98268 2.66389 5.3749 2.50056 5.83268 2.5H14.166C14.6243 2.5 15.0168 2.66333 15.3435 2.99C15.6702 3.31667 15.8332 3.70889 15.8327 4.16667V17.5L9.99935 15L4.16602 17.5Z'
        fill='#6F90F4'
      />
    </svg>
  ) : (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M4.16602 17.5V4.16667C4.16602 3.70833 4.32935 3.31611 4.65602 2.99C4.98268 2.66389 5.3749 2.50056 5.83268 2.5H14.166C14.6243 2.5 15.0168 2.66333 15.3435 2.99C15.6702 3.31667 15.8332 3.70889 15.8327 4.16667V17.5L9.99935 15L4.16602 17.5ZM5.83268 14.9583L9.99935 13.1667L14.166 14.9583V4.16667H5.83268V14.9583Z'
        fill='#6F90F4'
      />
    </svg>
  );
};

export default BookmarkIcon;
