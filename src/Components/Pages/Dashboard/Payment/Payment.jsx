import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../../hooks/useCart";


// TODO: Provide publishable key
const pk = import.meta.env.VITE_payment_gateway_pk;
 const stripePromise = loadStripe(pk);



const Payment = () => {

 
  const [result] = useCart()

  const cart = result?.data?.data || [];

 const total = cart.reduce((accumulator, currentValue)=> {
    return accumulator + currentValue.price 
 } , 0)
 const totalPrice = parseFloat(total.toFixed(2)) // converting to toFixed makes it string and  parseFloat makes it float
  return (
    <div className="w-full h-full">
      <div className=" w-full h-full flex items-center justify-center ">
        <div className="w-full pl-4 pr-4 md:pl-12 md:pr-12" >
          <h2 className="text-4xl">Make Your Payment.</h2>
          
          <Elements stripe={stripePromise}>
            <CheckoutForm price={totalPrice} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
