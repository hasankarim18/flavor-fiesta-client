import { useState } from "react";
import SectionTitle from "../../../Utils/SectionTitle/SectionTitle";
import { useEffect } from "react";
  import { useForm } from "react-hook-form";
const AddItem = () => {
  const [menuCategory, setMenuCategory] = useState([])

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
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  

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
              {/* category and price */}
              <div className="w-full flex gap-8 justify-between flex-col md:flex-row mt-4">
                <div className="w-full md:w-1/2">
                  <label className="text-xl mb-2 ml-1">Category*</label>
                  <select
                    {...register("category", { required: true })}
                    className="select block select-bordered w-full "
                  >
                    <option disabled selected>
                      Pick One Category
                    </option>
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
              <div className="mt-4">
                <input type="submit" className="btn btn-md" />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
};

export default AddItem;