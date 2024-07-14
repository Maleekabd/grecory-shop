const stylingImage = "w-full object-cover h-[30em]";

export const LandingPage = () => {
  return (
    <section id="landing__page" className="h-auto">
      <div className="h-auto p-5">
        <div className="m-10">
          <figure>
            <img
              className={`${stylingImage}`}
              src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </figure>
          <LandingPage2 />
        </div>
      </div>
    </section>
  );
};

const LandingPage2 = () => {
  return (
    <figure className="pt-8  gap-y-2 gap-2  grid grid-cols-2">
      <img
        className={`h-[30em] w-full row-span-2`}
        src="https://images.pexels.com/photos/7728347/pexels-photo-7728347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Organic Produce"
      />
      <img
        className={`h-[15em] w-full`}
        src="https://images.pexels.com/photos/7965886/pexels-photo-7965886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Butter and Margarine"
      />
      <img
        className={`h-[15em] w-full`}
        src="https://images.pexels.com/photos/96379/pexels-photo-96379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Seafood"
      />
    </figure>
  );
};
