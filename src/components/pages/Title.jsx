const Title = ({ number, title }) => {
  return (
    <div className="max-w-screen-3xl xl:flex-grow 3xl:ml-auto 3xl:mr-auto 3xl:w-full">
      <div className="mt-23 flex items-center justify-center gap-x-18 md:ml-39 md:mt-40 md:justify-start xl:ml-168 xl:mt-82 xl:gap-x-24 xl:self-start 3xl:ml-0">
        <span className="font-barlow-condensed text-16 font-bold leading-19 tracking-[2.7px] text-white opacity-25 md:text-20 md:leading-24 md:tracking-[3.37px] xl:text-28 xl:tracking-[4.7px] 3xl:ml-168">
          {number}
        </span>
        <h1 className="text-center font-barlow-condensed uppercase tracking-[2.7px] text-white md:text-20 md:leading-24 md:tracking-[3.37px] xl:text-28 xl:tracking-[4.7px]">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Title;
