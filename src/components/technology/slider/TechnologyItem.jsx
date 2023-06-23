const TechnologyItem = ({ word, desc, pictureLandscape, picturePortrait }) => {
  return (
    <div className="mb-56 mt-28 md:mt-60">
      <div
        style={{ "--landscape-img": `url('${pictureLandscape}')` }}
        className={`bg-no-repreat h-170 bg-[image:var(--landscape-img)] bg-cover md:h-310`}
      ></div>
      <div className="mt-100 md:mt-162">
        <p className="text-center font-barlow-condensed text-14 uppercase leading-17 tracking-[2.35px] text-light-blue md:text-16 md:tracking-[2.7px]">
          The terminology...
        </p>
        <h2 className="mt-9 text-center font-bellefair text-24 uppercase leading-28 text-white md:mt-26 md:text-40">
          {word}
        </h2>
        <p className="mx-24 mt-16 text-center font-barlow text-15 leading-25 text-light-blue md:mx-0 md:ml-auto md:mr-auto md:mt-24 md:max-w-445 md:text-16 md:leading-28">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default TechnologyItem;
