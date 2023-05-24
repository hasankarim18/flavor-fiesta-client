import { useEffect, useState } from "react";
import SectionTitle from "../../../Utils/SectionTitle/SectionTitle";
import MenuItem from "../../../Utils/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch("/data/menu.json")
          .then((res) => res.json())
          .then((data) =>
            setMenu(data.filter((menu) => menu.category === "popular"))
          );
    
    }, [])

    console.log(menu);
    


    return (
        <div>
            <SectionTitle 
                heading={`From Our Menu`}
                subHeading={`Check it out`}
            />
            <section>
                <div className="grid md:grid-cols-2 gap-8" >
                    {
                        menu.map(item => <MenuItem  key={item._id} item={item} ></MenuItem>)
                    }
                </div>
            </section>
        </div>
    );
};

export default PopularMenu;