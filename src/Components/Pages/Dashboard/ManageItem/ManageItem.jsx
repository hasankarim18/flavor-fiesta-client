
import { useEffect, useState } from "react";
import useMenu from "../../../../hooks/useMenu";
import SectionTitle from "../../../Utils/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const ManageItem = () => {
    const [allMenu, setAllMenu] = useState([])
    const { data, dataLoading, refetch: menuRefetch} = useMenu();
    const axiosSecure = useAxiosSecure()

    
    useEffect(() => {
      if(dataLoading === false){
        setAllMenu(data?.data)
      }
    }, [data, dataLoading])


    /***
     * Menu delete handler start 
     */
      const menuDeleteHandler = (id) => {
        Swal.fire({
          title: "Do you want to delete from Menu?",
          //  showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Delete",
          confirmButtonColor: "red",
          icon: "question",
          //   denyButtonText: `Don't save`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            axiosSecure.delete(`/menu/${id}`)           
              .then((res) => {                
                if (res.data.deletedCount > 0) {
                  menuRefetch();
                  Swal.fire({
                    title: "Deleted Successfully",
                    icon: "success",
                  });
                }else {
                   Swal.fire({
                     title: "Deleted failed",
                     icon: "error",
                   });
                }
              })
              .catch((error) => {
                console.log(error);
              });
          }
        });
      };
    /***
     * Menu delete handler ends 
     */



    return (
      <>
        <div className="w-full">
          <SectionTitle heading="Manage all items" subHeading="Hurry up">
            {" "}
          </SectionTitle>
        </div>
        <div className="p-8">
          <div className="overflow-x-auto">
            <h3 className="text-4xl">Total Menu item: {allMenu.length > 0 && allMenu.length} </h3>
            <table className="table capitalize">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Menu Item</th>                 
                  <th>Category</th>
                  <th>Price</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {allMenu.map((item, i) => {
                  return (
                    <tr key={item._id}>
                      <th>{i + 1}</th>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src={item.image} alt={item.name} />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold"> {item.name}</div>
                           
                          </div>
                        </div>
                      </td>
                      <td>
                       {item.category}
                      </td>
                      <td>${item.price}</td>
                      <td>                       
                        <button onClick={()=> {}} className="btn btn-success btn-xs font-bold  ">
                          update
                        </button>
                      </td>
                      <th>
                        <button onClick={()=> {menuDeleteHandler(item._id)}} className="btn btn-error btn-xs font-bold">delete</button>
                      </th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
};

export default ManageItem;