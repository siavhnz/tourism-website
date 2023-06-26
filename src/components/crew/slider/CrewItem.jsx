const CrewItem = ({ name, role, picture, bio }) => {
  const bioWords = bio.split(" ");
  const bioWordCount = bioWords.length;
  let bioWidth = "md:max-w-509";
  console.log(name, bioWordCount);

  switch (true) {
    case bioWordCount <= 30:
      bioWidth = "md:max-w-509";
      break;

    case bioWordCount > 30 && bioWordCount < 35:
      bioWidth = "md:max-w-560";
      break;

    case bioWordCount >= 35 && bioWordCount < 40:
      bioWidth = "md:max-w-565";
      break;

    case bioWordCount >= 40 && bioWordCount < 50:
      bioWidth = "md:max-w-640";
      break;

    default:
      bioWidth = "md:max-w-full md:mx-40";
      break;
  }

  return (
    <div className="my-27 max-w-screen-3xl md:mb-0 md:flex md:flex-col xl:mt-0 xl:grid xl:grid-cols-[repeat(2,minmax(0,auto))] 3xl:ml-auto 3xl:mr-auto">
      <div className="mx-25 border-b border-b-dark-blue md:mt-90 md:border-b-0 xl:mx-0 xl:mt-0 xl:flex">
        <img
          src={picture}
          alt={name}
          className="ml-auto mr-auto max-h-223 md:max-h-532 md:max-w-456 xl:ml-0 xl:max-h-none xl:max-w-none xl:self-end"
        />
      </div>
      <div
        className={`mt-74 md:-order-1 md:ml-auto md:mr-auto md:mt-38 ${bioWidth} xl:ml-168 xl:mt-170 xl:min-h-530 xl:max-w-none`}
      >
        <p className="text-center font-bellefair text-16 uppercase leading-18 text-white opacity-50 md:text-24 xl:text-left xl:text-32">
          {role}
        </p>
        <h2 className="mt-8 text-center font-bellefair text-24 uppercase leading-28 text-white md:mt-22 md:text-40 xl:mt-45 xl:text-left xl:text-56">
          {name}
        </h2>
        <p className="mx-24 mt-16 text-center font-barlow text-15 leading-25 text-light-blue md:mt-24 md:text-16 md:leading-28 xl:mx-0 xl:mt-40 xl:max-w-444 xl:text-left xl:text-18 xl:leading-32">
          {bio}
        </p>
      </div>
    </div>
  );
};

export default CrewItem;
