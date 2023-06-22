const CrewItem = ({ name, role, picture, bio }) => {
  return (
    <div className="my-27">
      <div className="mx-25 border-b border-b-dark-blue">
        <img src={picture} alt={name} className="ml-auto mr-auto max-h-223" />
      </div>
      <div className="mt-74">
        <p className="text-center font-bellefair text-16 uppercase leading-18 text-white opacity-50">
          {role}
        </p>
        <h2 className="mt-8 text-center font-bellefair text-24 uppercase leading-28 text-white">
          {name}
        </h2>
        <p className="mx-24 mt-16 text-center font-barlow text-15 leading-25 text-light-blue">
          {bio}
        </p>
      </div>
    </div>
  );
};

export default CrewItem;
