import FoodCard from "../../Utils/FoodCard/FoodCard";


const OrderTab = ({items}) => {
  // Todo add slider and pagenation here
    return (
      <div className="grid md:grid-cols-3 gap-8 grid-cols-1">
        {items.map((item) => (
          <FoodCard key={item._id} item={item} />
        ))}
      </div>
    );
};

export default OrderTab;