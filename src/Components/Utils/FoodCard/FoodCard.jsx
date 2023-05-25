

const FoodCard = ({item}) => {
     const { image, price, recipe, name, category } = item;
    return (
      <div className="card w-96 bg-base-100 shadow-xl text-center">
        <div className="relative">
          <figure className="relative">
            <img src={image} alt={name} />
          </figure>
          <p
            className="             
           absolute
           top-8
           right-4
           bg-black text-white
           p-2 
           rounded-lg text-xl
           "
          >
            Price: {price}
          </p>
        </div>
        <div className="card-body capitalize">
          <h2 className="text-xl text-center font-bold">{name}</h2>
          <p className="font-semibold">
            Category: <span className="text-yellow-800">{category}</span>{" "}
          </p>

          <p>{recipe}</p>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;