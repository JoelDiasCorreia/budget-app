export const Skeleton: React.FC<{
  className: string;
}> = ({ className }) => {
  return <div role="status" className={`${className} animate-pulse bg-gray-200 rounded-md dark:bg-gray-700 mb-2.5"`}></div>;
};
