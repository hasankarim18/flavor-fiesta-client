import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
// import useAuth from "../../../../hooks/useAuth";


const AllUsers = () => {
 // const [users, setUsers] = useState([])
    const {loading} = useAuth()
    const url = import.meta.env.VITE_baseURL;   
    const axiosSecure = useAxiosSecure()

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["users",],
    enabled:!loading,
    queryFn: async () => {
      const response = await axiosSecure.get(`/users`);

      return response.data;
    },
  });

  const users = data?.data || []


  const makeAdmin = (id) => {
    fetch(`${url}/users/admin/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch()
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Change role to admin",
            position: "top-end",
            icon: "success",
            timer: 1500,
          });
        }
      });
  };



  // TODO   delete user
  const handleUserDelete = (id) => {
      console.log('deleted user id', id)
  };


    return (
      <div>
        <Helmet>
          <title>All Users | Flavor Fiesta</title>
        </Helmet>
        <h3 className="text-4xl">Total users: {users?.length}</h3>
        <div>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <>
                    <tr>
                      <td></td>
                      <td></td>
                      <td className="text-3xl">Loading...</td>
                      <td></td>
                      <td></td>
                    </tr>
                  </>
                ) : (
                  <>
                    {
                      users.length === 0 && 'Forbidden access'
                    }
                    {users.map((user, i) => {
                      return (
                        <tr key={user._id}>
                          <th>{i + 1}</th>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>
                            {user?.role === "admin" ? (
                              <button className="badge badge-secondary">
                                Admin
                              </button>
                            ) : (
                              <button
                                onClick={() => {
                                  makeAdmin(user._id);
                                }}
                                className="btn font-bold text-white  btn-xs"
                              >
                                Make Admin
                              </button>
                            )}
                          </td>
                          <td>
                            <button
                              onClick={() => {
                                handleUserDelete(user._id);
                              }}
                              className="btn btn-xs btn-error "
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default AllUsers;