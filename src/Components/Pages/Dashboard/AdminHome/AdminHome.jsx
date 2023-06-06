import useAuth from "../../../../hooks/useAuth";


const AdminHome = () => {
    const {user} = useAuth()

    return (
        <div className="w-full m-4" >
            <h3 className="text-4xl">Welcome back {user?.displyaName}</h3>
        </div>
    );
};

export default AdminHome;