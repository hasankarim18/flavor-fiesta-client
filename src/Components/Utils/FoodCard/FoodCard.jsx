import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
 import {  toast } from "react-toastify";
import Swal from "sweetalert2";
import {  useLocation, useNavigate } from "react-router-dom";
 import useCart from "../../../hooks/useCart";


const FoodCard = ({item}) => {
     const { image, price, recipe, name, category,_id } = item;
     const {user} = useContext(AuthContext)
     const navigate = useNavigate()
     const location = useLocation()
     const [cart] = useCart()

   
      const url = import.meta.env.VITE_baseURL;

     // console.log(url);

     // toast messages
     const cartAddSuccess = (message) =>
       toast.success(`Product Added to cart ${message}`, {
         position: "bottom-right",
         theme: "colored",
       });
     const cartAddError = (message) =>
       toast.error(`Product Added to cart ${message}`, {
         position: "bottom-right",
         theme: "colored",

       });

    const handleAddToCart = (id)=> {      

      if(user && user?.email){ 
         const cartItem = {menuItemId: id, name, image, price, curtomer_email:user.email}
        fetch(`${url}/carts`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(cartItem),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
            //  refetch();
            cart.refetch()
              cartAddSuccess("successfully");
              // refetch card to update the number of items of the card
              
            }
          })
          .catch((error) => {
            console.log(error);
            cartAddError("Failed");
          });
      }else{
        Swal.fire({
          title: "Pleae Login to add product",
          icon: "warning",
          showDenyButton: true,
          confirmButtonText: "Login now",
          denyButtonText: `Login Later`,
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/login", {state:{from:location}});
          }
          //  else if (result.isDenied) {

          //  }
        });
      }

    }


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
            <button onClick={()=> {handleAddToCart(_id)}} className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;