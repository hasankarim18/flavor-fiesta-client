import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import useMenu from "../../../hooks/useMenu";
import { useEffect, useState } from "react";
import SectionTitle from "../../Utils/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";



const Menu = () => {
   const { data, dataLoading } = useMenu();
  const [deserts, setDeserts] = useState([])
  const [pizza, setPizza] = useState([])
  const [soup, setSoup] = useState([])
  const [salad, setSalad] = useState([])
  const [offered, setOffered] = useState([])



  useEffect(() => {
    
    if(dataLoading === false){
      setDeserts(data.filter((menu) => menu.category === "dessert"));
      setOffered(data.filter((menu) => menu.category === "offered"));
      setSoup(data.filter((menu) => menu.category === "soup"));
      setPizza(data.filter((menu) => menu.category === "pizza"));
      setSalad(data.filter((menu) => menu.category === "salad"));  
    }

  }, [dataLoading,data]);
  

  return (
    <div>
      <Helmet>
        <title> Menu | Flavor Fiesta </title>
      </Helmet>
      {/* todays offer */}
      <div>
        <Cover img="/assets/menu/banner3.jpg" title="Our menu" height="800" />
        <SectionTitle subHeading="Don't miss " heading="Today's offer" />
        <MenuCategory items={offered} />
      </div>
      {/* deserts */}
      <div className="mt-20">
        {/* <SectionTitle subHeading="Don't miss " heading="Deserts" /> */}
        {!dataLoading ? (
          <MenuCategory
            coverImg="/assets/menu/dessert-bg.jpeg"
            items={deserts}
            title="deserts"
            description="Deserts, vast and arid landscapes, captivate with their harsh beauty and unforgiving nature."
          />
        ) : (
          <h5 className="text-4xl">Loading...</h5>
        )}
      </div>
      {/* pizzas */}
      <div className="mt-20">
        {/* <SectionTitle subHeading="Don't miss " heading="Deserts" /> */}
        {!dataLoading ? (
          <MenuCategory
            coverImg="/assets/menu/pizza-bg.jpg"
            items={pizza}
            title="Pizzas"
            description="Pizzas, vast and arid landscapes, captivate with their harsh beauty and unforgiving nature."
          />
        ) : (
          <h5 className="text-4xl">Loading...</h5>
        )}
      </div>
      {/* salad */}
      <div className="mt-20">
        {/* <SectionTitle subHeading="Don't miss " heading="Deserts" /> */}
        {!dataLoading ? (
          <MenuCategory
            coverImg="/public/assets/menu/salad-bg.jpg"
            items={salad}
            title="Salad"
            description="Salad, vast and arid landscapes, captivate with their harsh beauty and unforgiving nature."
          />
        ) : (
          <h5 className="text-4xl">Loading...</h5>
        )}
      </div>
      {/* soup */}
      <div className="mt-20">
        {/* <SectionTitle subHeading="Don't miss " heading="Deserts" /> */}
        {!dataLoading ? (
          <MenuCategory
            coverImg="/public/assets/menu/soup-bg.jpg"
            items={soup}
            title="Soup"
            description="Soup, vast and arid landscapes, captivate with their harsh beauty and unforgiving nature."
          />
        ) : (
          <h5 className="text-4xl">Loading...</h5>
        )}
      </div>
    </div>
  );
};

export default Menu;
