import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";

const CheckoutForm = ({ price }) => { 
  const stripe = useStripe();
  const elements = useElements();
  const {user} = useAuth()
  const [cardError, setCardError] = useState("");
  const axiosSecure = useAxiosSecure()
  const [clientSecret, setClientSecret] = useState('')
  const [processing, setProcessing] = useState(false)
  const [transactionId, setTransactionId] = useState('')

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price }).then((res) => {
  //  console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [price]);
  
  

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
   

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      setCardError("");
    //  console.log("[PaymentMethod#]", paymentMethod);
    }

    setProcessing(true)
    const { paymentIntent, error:confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'anonymous',
            name: user?.displayName || 'No name'
          },
        },
      }
    );

    if(confirmError){
      console.log(confirmError)
      return 
    }
    setProcessing(false) // processing done
    if (paymentIntent.status === "succeeded"){
         setTransactionId(paymentIntent.id)
         // Todo next
       //  console.log("#payment intent-success", paymentIntent);
    }
   
    


  };

  return (
    <div className="my-8 w-full">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="mt-4 text-center">
          <button
            className="btn w-full sm:w-2/3 md:w-1/2 "
            type="submit"
            disabled={!stripe || !clientSecret || processing}
          >
            Pay
          </button>
        </div>
      </form>
      <div className="mt-4 text-center text-xl text-red-400">
        {cardError && cardError}
      </div>
      {
        transactionId && <div className="text-green-500 text-xl mt-4" >
          Tansaction complete. Transaction id: {transactionId}
        </div>
      }
    </div>
  );
};

export default CheckoutForm;
