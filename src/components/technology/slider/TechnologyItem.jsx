const TechnologyItem = ({ word, desc, pictureLandscape, picturePortrait }) => {
  return (
    <div className="mb-56 mt-28 max-w-screen-3xl md:mt-60 xl:mt-30 xl:grid xl:w-full xl:grid-cols-[repeat(2,minmax(0,auto))] 3xl:ml-auto 3xl:mr-auto">
      <div
        style={{
          "--landscape-img": `url('${pictureLandscape}')`,
          "--portrait-img": `url('${picturePortrait}')`,
        }}
        className={`bg-no-repreat h-170 bg-[image:var(--landscape-img)] bg-cover md:h-310 xl:ml-auto xl:h-527 xl:w-515 xl:bg-[image:var(--portrait-img)] 2xl:mr-auto`}
      ></div>
      <div className="mt-100 overflow-x-hidden md:mt-162 xl:-order-1 xl:ml-326 xl:mt-113">
        <p className="text-center font-barlow-condensed text-14 uppercase leading-17 tracking-[2.35px] text-light-blue md:text-16 md:tracking-[2.7px] xl:text-left">
          The terminology...
        </p>
        <h2 className="mt-9 text-center font-bellefair text-24 uppercase leading-28 text-white md:mt-26 md:text-40 xl:mt-15 xl:text-left xl:text-56 xl:leading-60">
          {word}
        </h2>
        <p className="mx-24 mt-16 text-center font-barlow text-15 leading-25 text-light-blue md:mx-0 md:ml-auto md:mr-auto md:mt-24 md:max-w-445 md:text-16 md:leading-28 xl:ml-0 xl:mt-20 xl:text-left xl:text-18 xl:leading-32">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default TechnologyItem;
