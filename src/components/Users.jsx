import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Users = () => {
    const loadedUsers = useLoaderData();
    const[users, setUsers] = useState(loadedUsers);

    const handleDelete = _id => {
        console.log(_id)
        // make sure user is confirmed to delete
        fetch(`http://localhost:5002/user/${_id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            if(data.deletedCount > 0 ){
                

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your user has been deleted",
                    showConfirmButton: false,
                    timer: 1500
                  });

                // alert('Successfully deleted')
                // remove the user from UI
                const remainingUsers = users.filter(user => user._id !== _id );
                setUsers(remainingUsers)
            }
        })
    }



    return (
        <div>
            <h1>This is Users page:{loadedUsers.length}</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Created Add</th>
                            <th>Action</th>
                            <th>lastLogin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <tr key={user._id}>
                                <th>1</th>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                                <td>
                                <button onClick={() => handleDelete(user._id)} className="btn text-red-600">X</button>

                                </td>
                                <td></td>
                              </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;