const TechnologyItem = ({ word, desc, pictureLandscape, picturePortrait }) => {
  return (
    <div className="mb-56 mt-28">
      <picture>
        <source media="max-width(60em)" srcSet={pictureLandscape} />
        <source media="min-width(60em)" srcSet={picturePortrait} />
        <img src={pictureLandscape} alt={word} className="min-h-170" />
      </picture>
      <div className="mt-100">
        <p className="text-center font-barlow-condensed text-14 uppercase leading-17 tracking-[2.35px] text-light-blue">
          The terminology...
        </p>
        <h2 className="mt-9 text-center font-bellefair text-24 uppercase leading-28 text-white">
          {word}
        </h2>
        <p className="mx-24 mt-16 text-center font-barlow text-15 leading-25 text-light-blue">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default TechnologyItem;
