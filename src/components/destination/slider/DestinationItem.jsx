const DestinationItem = ({ title, picture, desc, distance, time }) => {
  return (
    <div className="mt-28 flex flex-col items-center md:mt-60">
      <img src={picture} alt={title} className="max-w-170 md:max-w-300" />
      <div className="mt-76 text-center md:mt-120">
        <h2 className="font-bellefair text-56 uppercase leading-64 text-white md:text-80 md:leading-92">
          {title}
        </h2>
        <p className="mx-24 font-barlow text-15 leading-25 text-light-blue md:ml-auto md:mr-auto md:mt-8 md:max-w-573 md:text-16 md:leading-28">
          {desc}
        </p>
        <div className="mx-24 mb-28 mt-32 h-1 bg-dark-blue md:mx-0 md:mb-24 md:mt-49" />
        <div className="mb-58 md:flex md:justify-evenly">
          <div>
            <span className="font-barlow-condensed text-14 uppercase leading-17 tracking-[2.35px] text-light-blue">
              avg. distance
            </span>
            <p className="mt-6 font-bellefair text-28 uppercase leading-32 text-white md:mt-10">
              {distance}
            </p>
          </div>
          <div className="mt-32 md:mt-0">
            <span className="mt-12 font-barlow-condensed text-14 uppercase leading-17 tracking-[2.35px] text-light-blue">
              est. travel time
            </span>
            <p className="mt-6 font-bellefair  text-28 uppercase leading-32 text-white md:mt-10">
              {time}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationItem;
