const Title = ({ number, title }) => {
  return (
    <div className="mt-23 flex items-center justify-center gap-x-18">
      <span className="font-barlow-condensed text-16 font-bold leading-19 tracking-[2.7px] text-white opacity-25">
        {number}
      </span>
      <h1 className="text-center font-barlow-condensed uppercase tracking-[2.7px] text-white">
        {title}
      </h1>
    </div>
  );
};

export default Title;
