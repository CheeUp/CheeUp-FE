interface PTechBadge {
  children: React.ReactNode;
}

const TechBadge: React.FC<PTechBadge> = ({ children }) => {
  return (
    <div className='rounded-full border border-primary bg-white px-4 py-1 text-detail font-bold text-primary'>
      {children}
    </div>
  );
};

export default TechBadge;
