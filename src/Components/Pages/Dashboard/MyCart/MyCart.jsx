import { Helmet } from "react-helmet-async";
import useCart from "../../../../hooks/useCart";


const MyCart = () => {
    const [result] = useCart()
    

    const cart = result?.data?.data || []

   

    const totalPrice = cart.reduce((sum, item) => {
       
      return sum + item.price;
    }, 0);



    return (
        <div>
            <Helmet> 
                <title> My Cart | Flavor Fiesta </title>
            </Helmet>
            <h2 className="text-5xl">Total Items: {cart.length} </h2>
            <h2 className="text-3xl text-aztecGold">Total Price: {totalPrice.toFixed(2)} </h2>
            <div>
                <button className="btn btn-md btn-warning">Pay</button>
            </div>
        </div>
    );
};

export default MyCart;