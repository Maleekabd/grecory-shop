import { Link } from "react-router-dom";
import slugify from "slugify";
/* eslint-disable react/prop-types */
export const SubNavbar = ({ Datas }) => {
  const newUnique = [...new Set(Datas.map((item) => item.category))];

  return (
    <nav>
      <ul className="flex justify-center gap-10 text-[12px]">
        {newUnique.map((item, index) => (
          <div key={index}>
            <li className="hover:text-emerald-300 transition-all duration-100 ease-in">
              <Link
                to={`/category/${slugify(item, { strict: true, lower: true })}`}
              >
                {item}
              </Link>
            </li>
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default SubNavbar;
