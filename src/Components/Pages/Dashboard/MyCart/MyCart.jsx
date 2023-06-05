import { Helmet } from "react-helmet-async";
import useCart from "../../../../hooks/useCart";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const MyCart = () => {
  const [result] = useCart();
  const url = import.meta.env.VITE_baseURL;
  const refetch = result?.refetch

  const cart = result?.data?.data || [];
  const isLoading = result?.isLoading;

  const totalPrice = cart.reduce((sum, item) => {
    return sum + item.price;
  }, 0);

 // console.log(totalPrice);

  const cartDeleteHandler = (id)=> {
    Swal.fire({
      title: "Do you want to delete from cart?",
      //  showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      confirmButtonColor:"red",
      icon: "question",
      //   denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) { 
      fetch(`${url}/carts/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
       //   console.log(data);
          if (data.deletedCount > 0){
            refetch()
            Swal.fire({
              title: "Deleted Successfully",
              icon: "success",
            });
          }          
        })
        .catch((error) => {
          console.log(error);
        });
     
      }
    });
   
  }

  return (
    <div className="w-full" >
      <Helmet>
        <title> My Cart | Flavor Fiesta </title>
      </Helmet>
      <div className="my-4 flex justify-evenly items-center " >
        <h2 className="text-3xl">Total Items: {cart.length} </h2>
        <h2 className="text-3xl text-aztecGold">
          Total Price: {totalPrice.toFixed(2)}{" "}
        </h2>
        <div>
          <Link to="/dashboard/payment" className="btn btn-md btn-warning">Pay</Link>
        </div>
      </div>
      {/* cart table */}
      <div className="mt-8 w-full">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Item image</th>
                <th>item name</th>
                <th>price</th>
                <th>quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            {!isLoading ? (
              <tbody>
                {/* row 1 */}
                {cart.map((item, i) => {
                  const { image, name, price , _id } = item;
                  return (
                    <tr key={item._id}>
                      <th> {i + 1} </th>
                      {/* item image */}
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src={image} alt={name} />
                            </div>
                          </div>
                        </div>
                      </td>
                      {/* item name */}
                      <td>{name}</td>
                      {/* price */}
                      <td>{price}</td>
                      {/* quantity */}
                      <td></td>
                      {/* action */}
                      <td>
                        <button 
                         onClick={()=> {cartDeleteHandler(_id)}}
                         className="bg-red-600 rounded-lg cursor-pointer p-4 text-white text-2xl">
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            ) : (
              <tbody>
                <tr> 
                 <td></td>
                 <td></td>
                  <td className="text-3xl text-center text-aztecGold py-8">
                    Loading...
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            )}

            {/* foot */}
            <tfoot>
              <tr>
                <th>Si</th>
                <th>Item image</th>
                <th>item name</th>
                <th>price</th>
                <th>quantity</th>
                <th>Action</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
