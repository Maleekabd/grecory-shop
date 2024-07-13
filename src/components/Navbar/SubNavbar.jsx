/* eslint-disable react/prop-types */
const SubNavbar = ({ Datas }) => {
  const newUnique = [...new Set(Datas.map((item) => item.category))];

  return (
    <nav>
      <ul className="flex justify-center gap-10 text-[12px]">
        {newUnique.map((item, index) => (
          <div key={index}>
            <li className="hover:text-emerald-300 transition-all duration-100 ease-in">
              <a href={index}>{item}</a>
            </li>
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default SubNavbar;
