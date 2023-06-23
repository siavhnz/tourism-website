const Title = ({ number, title }) => {
  return (
    <div className="mt-23 flex items-center justify-center gap-x-18 md:ml-39 md:mt-40 md:justify-start">
      <span className="font-barlow-condensed text-16 font-bold leading-19 tracking-[2.7px] text-white opacity-25 md:text-20 md:leading-24 md:tracking-[3.37px]">
        {number}
      </span>
      <h1 className="text-center font-barlow-condensed uppercase tracking-[2.7px] text-white md:text-20 md:leading-24 md:tracking-[3.37px]">
        {title}
      </h1>
    </div>
  );
};

export default Title;
