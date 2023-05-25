import { Link } from "react-router-dom";
import MenuItem from "../../../Utils/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";


const MenuCategory = ({ items, title, coverImg, description }) => {

 

    const cimg = coverImg || "/assets/menu/banner3.jpg";
 

    let showItems = []

    if(items.length > 6){
        showItems = items.splice(0, 6);
    }else {
        showItems = items
    }

  return (
    <div className="">
      {title && (
        <Cover
          img={cimg}
          title={title}
          height="700"
          description={description}
        />
      )}
      <div className="grid md:grid-cols-2 gap-8 mt-20">
        {showItems.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
        <Link
          to={`/order/${title}`}
          className="btn btn-outline border-0 border-b-4 mt-8"
        >
          Order Now
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;