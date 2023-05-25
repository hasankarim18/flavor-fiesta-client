
import SectionTitle from "../../../Utils/SectionTitle/SectionTitle";
import MenuItem from "../../../Utils/MenuItem/MenuItem";
import useMenu from "../../../../hooks/useMenu";


const PopularMenu = () => {
   // const [menu, setMenu] = useState([])

   const {data, dataLoading} = useMenu();

   const menu = data.filter((menu) => menu.category === "popular");

    console.log(dataLoading, menu);

    return (
        <div>
            <SectionTitle 
                heading={`From Our Menu`}
                subHeading={`Check it out`}
            />
            <section>
                <div className="grid md:grid-cols-2 gap-8" >
                    {
                      dataLoading ? <h1 className="text-4xl">Loading...</h1> :   menu.map(item => <MenuItem  key={item._id} item={item} ></MenuItem>)
                    }
                </div>
            </section>
        </div>
    );
};

export default PopularMenu;