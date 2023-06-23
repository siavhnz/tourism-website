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
    <div className="my-27 md:mb-0 md:flex md:flex-col">
      <div className="mx-25 border-b border-b-dark-blue md:mt-90 md:border-b-0">
        <img
          src={picture}
          alt={name}
          className="ml-auto mr-auto max-h-223 md:max-h-532 md:max-w-456"
        />
      </div>
      <div
        className={`mt-74 md:-order-1 md:ml-auto md:mr-auto md:mt-38 ${bioWidth}`}
      >
        <p className="text-center font-bellefair text-16 uppercase leading-18 text-white opacity-50 md:text-24">
          {role}
        </p>
        <h2 className="mt-8 text-center font-bellefair text-24 uppercase leading-28 text-white md:mt-22 md:text-40">
          {name}
        </h2>
        <p className="mx-24 mt-16 text-center font-barlow text-15 leading-25 text-light-blue md:mt-24 md:text-16 md:leading-28">
          {bio}
        </p>
      </div>
    </div>
  );
};

export default CrewItem;
