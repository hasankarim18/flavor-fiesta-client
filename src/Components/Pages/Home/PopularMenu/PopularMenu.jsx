
import SectionTitle from "../../../Utils/SectionTitle/SectionTitle";
import MenuItem from "../../../Utils/MenuItem/MenuItem";
import useMenu from "../../../../hooks/useMenu";
import { useEffect, useState } from "react";


const PopularMenu = () => {
  const {data, dataLoading} = useMenu();
  const [popularMenu, setPopularMenu] = useState([])

  useEffect(() => {
    if (!dataLoading) {
      setPopularMenu(data?.data);
    }
  }, [data, dataLoading]);
  
  return (
    <div>
      <SectionTitle heading={`From Our Menu`} subHeading={`Check it out`} />
      
      <section>
        <div className="grid md:grid-cols-2 gap-8">
          {
            dataLoading ? <h1 className="text-4xl">Loading...</h1> :   popularMenu.map(item => <MenuItem  key={item._id} item={item} ></MenuItem>)
          }
        </div>
      </section>
    </div>
  );
};

export default PopularMenu;