import { useState } from "react";
import SectionTitle from "../../../Utils/SectionTitle/SectionTitle";
import { useEffect } from "react";
  import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";



const AddItem = () => {
  const [menuCategory, setMenuCategory] = useState([]) 
  const axiosSecure = useAxiosSecure()
  const [menuSubmitting, setMenuSubmitting] = useState(false)
  // file upload url
   const image_hosting_url = import.meta.env.VITE_image_hosting_url;
 

  const url = import.meta.env.VITE_baseURL;
  useEffect(() => {
    fetch(`${url}/menuCategory`)
    .then(res => res.json())
    .then(data => {
      setMenuCategory(data)
    })
    .catch((error)=> {
      console.log(error);
    })  
  }, [url])


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  //
  const onSubmit = (data) => {
   setMenuSubmitting(true)
    const formData = new FormData();
    formData.append("image",data.image[0]);

    fetch(image_hosting_url, {
      method:'POST', 
      body:formData 
    })
    .then(res => res.json())
    .then(imgRes =>  {
        if(imgRes.success){
          const {name, price, category, recipe } = data;
          const imgUrl = imgRes.data.display_url;
          const newItem = { name, price:parseFloat(price), category, recipe, image: imgUrl };
          // adding menu to the menu sending jwt using axios Secure and admin
          axiosSecure.post(`/menu`, newItem)
          .then(data => {          
           if(data.status === 200){
           Swal.fire({
             icon: "success",
             title: `${name} added successfully`,
           });
           setMenuSubmitting(false)
            reset()

           }
            
          })
          .catch(error => {
            console.log(error);
          })
         
          console.log(newItem);
        }
    })

   // console.log(data);
  };

  

    return (
      <div className="w-full p-4 md:p-8">
        <SectionTitle
          style={{ width: "100%" }}
          subHeading="What's new"
          heading="Add an item"
        >
          {" "}
        </SectionTitle>
        <div className="w-full mt-4 p-8 bg-gray-300">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="w-full">
              {/* Recipe name */}
              <div className="w-full">
                <label className="text-xl mb-2 ml-1">Recipe name*</label>
                <input
                  {...register("name", { required: true, maxLength: 80 })}
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                />
              </div>
              {errors?.name && (
                <div className="text-red-400">Name is required</div>
              )}
              {/* category and price */}
              <div className="w-full flex gap-8 justify-between flex-col md:flex-row mt-4">
                <div className="w-full md:w-1/2">
                  <label className="text-xl mb-2 ml-1">Category*</label>
                  <select
                    defaultValue="Pick One"
                    {...register("category", { required: true })}
                    className="select block select-bordered w-full "
                  >
                    <option disabled>Pick One</option>
                    {menuCategory.map((cat) => {
                      return (
                        <option
                          value={cat._catName}
                          className="text-black"
                          key={cat._id}
                        >
                          {cat.catName}{" "}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="w-full md:w-1/2">
                  <label className="text-xl mb-2 ml-1">Price*</label>
                  <input
                    {...register("price", {
                      required: true,
                    })}
                    type="number"
                    placeholder="Price"
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
              {/* description */}
              <div className="mt-4">
                <textarea
                  {...register("recipe", { required: true })}
                  className="textarea textarea-bordered w-full"
                  placeholder="Bio"
                ></textarea>
              </div>
              <div className="mt-4">
                <input
                  {...register("image", { required: true })}
                  type="file"
                  className="file-input w-full max-w-xs"
                />
              </div>
              <div className="mt-4 ">
                {/* <input value="Add Item" className="btn btn-md" /> */}
                <button
                  className="flex items-center justify-start gap-4 btn "
                  type="submit"
                >
                  <span>Add Item </span>
                  {menuSubmitting && (
                    <span className="animate-spin w-8 h-8 rounded-full  border-l-red-400 border-4 border-green-400 inline-block"></span>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
};

export default AddItem;

/**
 * https://drive.google.com/file/d/1ii5DkYta-MEQTvwQhJ3tiDFSgy56t5rU/view?usp=drive_link
 * 
 * ***** 
 * https://drive.google.com/uc?export=view&id=1ii5DkYta-MEQTvwQhJ3tiDFSgy56t5rU
 * 
 */

