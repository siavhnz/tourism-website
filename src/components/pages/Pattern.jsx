const Pattern = ({ pattern }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 -z-50 bg-very-dark-blue bg-opacity-25">
      <div
        className={` bg-repeat-none h-full w-full ${pattern} bg-cover bg-center mix-blend-screen`}
      />
    </div>
  );
};

export default Pattern;
