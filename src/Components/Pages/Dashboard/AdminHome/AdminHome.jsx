import { useQuery } from "@tanstack/react-query";
import useAdmin from "../../../../hooks/useAdmin";
import useAuth from "../../../../hooks/useAuth";
import {  FaShieldAlt } from "react-icons/fa";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useEffect } from "react";


const AdminHome = () => {
    const {user} = useAuth()
    const [isAdmin] = useAdmin()
    const axiosSecure = useAxiosSecure()


    const {data: stats , isLoading} = useQuery({
      queryKey:['admin-stats'],
      queryFn: async ()=> {
       
        const res = await axiosSecure('/admin-stats')
        return res.data
      }
    })

  

    return (
      <div className="w-full m-4">
        <h3 className="text-4xl">
          Welcome back
          <span
            className={`${isAdmin ? "text-red-500" : "text-green-500"} ml-2`}
          >
            Hi, {user?.displayName}
          </span>
          <FaShieldAlt />
        </h3>
        {/* stats */}
        <div className="mt-4">
          <div className="stats shadow">
            <div className="stat place-items-center">
              <div className="stat-title">Revenue</div>
              <div className="stat-value">{stats?.revenue}</div>
              {/* <div className="stat-desc">From January 1st to February 1st</div> */}
            </div>

            <div className="stat place-items-center">
              <div className="stat-title">Users</div>
              <div className="stat-value text-secondary">{stats?.users}</div>
              {/* <div className="stat-desc text-secondary">↗︎ 40 (2%)</div> */}
            </div>

            <div className="stat place-items-center">
              <div className="stat-title">Menu Items</div>
              <div className="stat-value"> {stats?.products} </div>
              {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
            </div>
            <div className="stat place-items-center">
              <div className="stat-title">Orders</div>
              <div className="stat-value"> {stats?.orders} </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AdminHome;