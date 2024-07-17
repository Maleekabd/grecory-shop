import Bakery from "../../assets/icon_category/bakery.png";
import Diet from "../../assets/icon_category/diet.png";
import Drink from "../../assets/icon_category/drink.png";
import Fruits from "../../assets/icon_category/fruits.png";
import HealtyDrink from "../../assets/icon_category/healthydrink.png";
import Vegetables from "../../assets/icon_category/vegetable.png";

const IconCategory = [
  { id: 1, name: "Bakery", Icon: Bakery },
  { id: 2, name: "Food", Icon: Diet },
  { id: 3, name: "Drink", Icon: Drink },
  { id: 4, name: "Fruit", Icon: Fruits },
  { id: 5, name: "Beverages", Icon: HealtyDrink },
  { id: 6, name: "Vegetables", Icon: Vegetables },
];

console.log(IconCategory);
const Category = () => {
  return (
    <div className="p-5">
      <h1 className="text-3xl pb-5 text-center">Category</h1>
      <div className="flex justify-center gap-10 flex-wrap rounded-full">
        {IconCategory.map((icon, index) => (
          <a key={index} href="" className="hover:text-emerald-400 " >
            <figure>
              <img
                className="hover:border-emerald-400 hover:transition-all hover:duration-200 hover:ease-linear border p-1 rounded-full object-cover h-28 w-28"
                src={icon.Icon}
                alt={icon.name}
              />
              <figcaption className="text-center text-sm p-2">
                {icon.name}
              </figcaption>
            </figure>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Category;
