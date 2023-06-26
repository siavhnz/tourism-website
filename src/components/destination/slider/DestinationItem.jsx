const DestinationItem = ({ title, picture, desc, distance, time }) => {
  return (
    <div className="mt-28 flex flex-col items-center md:mt-60 xl:mt-55 xl:grid xl:grid-cols-2 max-w-screen-3xl 3xl:ml-auto 3xl:mr-auto">
      <div className="xl:ml-230">
        <img
          src={picture}
          alt={title}
          className="max-w-170 md:max-w-300 xl:max-w-445"
        />
      </div>

      <div className="mt-76 text-center md:mt-120 md:max-w-573 xl:ml-112 xl:mt-97 xl:max-w-444">
        <h2 className="font-bellefair text-56 uppercase leading-64 text-white md:text-80 md:leading-92 xl:text-left xl:text-100">
          {title}
        </h2>
        <p className="mx-24 font-barlow text-15 leading-25 text-light-blue md:ml-auto md:mr-auto md:mt-8 md:text-16 md:leading-28 xl:mx-0 xl:mt-14 xl:mt-24 xl:text-left xl:text-18 xl:leading-32">
          {desc}
        </p>
        <div className="mx-24 mb-28 mt-32 h-1 bg-dark-blue md:mx-0 md:mb-24 md:mt-49 xl:mb-30 xl:mt-54" />
        <div className="mb-58 md:flex md:justify-evenly xl:justify-start xl:gap-x-80">
          <div className="xl:flex xl:flex-col xl:justify-start">
            <span className="font-barlow-condensed text-14 uppercase leading-17 tracking-[2.35px] text-light-blue xl:text-left">
              avg. distance
            </span>
            <p className="mt-6 font-bellefair text-28 uppercase leading-32 text-white md:mt-10 xl:text-left">
              {distance}
            </p>
          </div>
          <div className="mt-32 md:mt-0 xl:flex xl:flex-col xl:justify-start">
            <span className="mt-12 font-barlow-condensed text-14 uppercase leading-17 tracking-[2.35px] text-light-blue md:mt-0 xl:text-left">
              est. travel time
            </span>
            <p className="mt-6 font-bellefair text-28 uppercase leading-32 text-white md:mt-10 xl:text-left">
              {time}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationItem;
