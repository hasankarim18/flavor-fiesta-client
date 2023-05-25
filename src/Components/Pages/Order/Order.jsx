import { useEffect, useState } from "react";
import Cover from "../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const Order = () => {
  // img, title, height, description
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
   const { category } = useParams();
 const initialIndex = categories.indexOf(category)

  const [tabIndex, setTabIndex] = useState(initialIndex);
  const {data, dataLoading} = useMenu()
   const [desserts, setDesserts] = useState([]);
   const [pizza, setPizza] = useState([]);
   const [soup, setSoup] = useState([]);
   const [salad, setSalad] = useState([]);
   const [drinks, setDrinks] = useState([]);

   useEffect(() => {
     if (dataLoading === false) {
       setDesserts(data.filter((menu) => menu.category === "dessert"));
       setDrinks(data.filter((menu) => menu.category === "drinks"));
       setSoup(data.filter((menu) => menu.category === "soup"));
       setPizza(data.filter((menu) => menu.category === "pizza"));
       setSalad(data.filter((menu) => menu.category === "salad"));
     }
   }, [dataLoading, data]);


  return (
    <div>
      <Helmet>
        <title> Order Food | Flavor Fiesta </title>
      </Helmet>
      <Cover
        img="/assets/shop/banner2.jpg"
        title="Our Shop"
        description="Would you like to try our dish"
        isDescriptionCap
      />

      <div className="my-20">
        {!dataLoading ? (
          <Tabs
            defaultIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
            //  onSelect={3}
          >
            <TabList>
              <Tab>Salad</Tab>
              <Tab>Pizza</Tab>
              <Tab>Soup</Tab>
              <Tab>Dessert</Tab>
              <Tab>Drinks</Tab>
            </TabList>
            <TabPanel>
              <OrderTab items={salad} />
            </TabPanel>
            <TabPanel>
              <OrderTab items={pizza} />
            </TabPanel>
            <TabPanel>
              <OrderTab items={soup} />
            </TabPanel>
            <TabPanel>
              <OrderTab items={desserts} />
            </TabPanel>
            <TabPanel>
              <OrderTab items={drinks} />
            </TabPanel>
          </Tabs>
        ) : (
          <h1 className="text-5xl text-center">Loading....</h1>
        )}
      </div>
    </div>
  );
};

export default Order;