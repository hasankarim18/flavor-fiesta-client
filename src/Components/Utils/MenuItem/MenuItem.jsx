

const MenuItem = ({item}) => {
    const { image, price, recipe, name } = item;
    return (
      <div className="flex items-center space-x-4">
        <div>
          <img style={{borderRadius:"0 200px 200px 200px"}} className="w-[120px] h-[100px]" src={image} alt="" />
        </div>
        <div>
          <h3 className="uppercase">{name}</h3>
          <p>{recipe}</p>
        </div>
        <p className="text-yellow-500">${price}</p>
      </div>
    );
};

export default MenuItem;