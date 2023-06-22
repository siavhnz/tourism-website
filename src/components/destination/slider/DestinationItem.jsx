const DestinationItem = ({ title, picture, desc, distance, time }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={picture} alt={title} className="mb-26 mt-28 h-170 w-170" />
      <div className="mt-50 text-center">
        <h2 className="font-bellefair text-56 uppercase leading-64 text-white">
          {title}
        </h2>
        <p className="mx-24 font-barlow text-15 leading-25 text-light-blue">
          {desc}
        </p>
        <div className="mx-24 mb-28 mt-32 h-1 bg-dark-blue" />
        <div>
          <div>
            <span className="font-barlow-condensed text-14 uppercase leading-17 tracking-[2.35px] text-light-blue">
              avg. distance
            </span>
            <p className="mt-6 font-bellefair text-28 uppercase leading-32 text-white">
              {distance}
            </p>
          </div>
          <div className="mb-58 mt-32">
            <span className="mt-12 font-barlow-condensed text-14 uppercase leading-17 tracking-[2.35px] text-light-blue">
              est. travel time
            </span>
            <p className="mt-6 font-bellefair text-28 uppercase leading-32 text-white">
              {time}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationItem;
