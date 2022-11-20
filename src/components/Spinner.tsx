import { CgSpinner } from 'react-icons/cg';

const Spinner = ({ className, size }: { className?: string; size?: number | string }) => {
  return (
    <div aria-label='Loading...' role='status'>
      <CgSpinner
        className={`animate-spin text-pink-200 dark:text-pink-100 ${className}`}
        size={size ?? 40}
      />
    </div>
  );
};

export default Spinner;
