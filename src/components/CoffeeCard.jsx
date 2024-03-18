import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee, setCoffees, coffees }) => {


    const { _id, name, quantity, supplier, taste, details, photo } = coffee;

    const handleDelete = _id => {
        console.log(_id);
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

                fetch(`http://localhost:5002/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(cof => cof._id !== _id)
                            setCoffees(remaining)
 
                        }
                    })

            }
        });
    }




    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={photo} alt="" /></figure>
                <div className="flex justify-around  w-full">
                    <div>
                        <h2 className="card-title">{name}</h2>
                        <p>{quantity}</p>
                        <p>{supplier}</p>
                        <p>{taste}</p>
                        <p>{details}</p>
                        <p>{details}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="join join-vertical space-y-2">
                            <button className="btn btn-primary join-item">view</button>
                            <Link to = {`updateCoffee/${_id}`}>
                            <button className="btn btn-warning join-item">update</button>
                            </Link>
                            <button onClick={() => handleDelete(_id)} className="btn btn-error  join-item">delete</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;