import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";



const Menu = () => {
  return (
    <div>
      <Helmet>
        <title> Menu | Flavor Fiesta </title>
      </Helmet>
      <div>
        <Cover img="/assets/menu/banner3.jpg" title="Our menu" height="800" />
      
      </div>
      <div></div>
    </div>
  );
};

export default Menu;
