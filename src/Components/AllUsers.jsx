import { useState } from "react";
import { MdEdit } from "react-icons/md";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";


const AllUsers = () => {
    const loaderUsers = useLoaderData();
    const [users, setUsers] = useState(loaderUsers)
    // console.log(users);

    const handleDeleteUsers = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount) {
                            const remainingUser = users.filter(user => user._id !== id);
                            setUsers(remainingUser)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }

                    })

            }
        });
    }
    return (
        <div>
            <h1 className="text-3xl font-bold text-center py-8">All users {users.length} </h1>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.gender}</td>
                                <td>{user.status}</td>
                                <td>
                                    <button className="btn text-xl"><MdEdit /></button>
                                    <button onClick={() => handleDeleteUsers(user._id)} className="btn text-xl ml-3"><RiDeleteBack2Fill /></button>
                                </td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;