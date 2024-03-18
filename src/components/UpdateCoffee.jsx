import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const {_id, name, quantity, supplier, taste, category, details, photo} = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();
    
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee = { name, quantity, supplier, taste, category, details, photo}
        console.log(updatedCoffee)
    
        // send data to the server
        fetch(`http://localhost:5002/coffee/${_id}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
    
            
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0 ){
                Swal.fire({
                    position: "top-middle",
                    icon: "success",
                    title: " Coffee updated Successfully ",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
    
    
        })
    
    
    }



    return (
        <div>
            <h1>This is Update Coffee page</h1>
             <div>
            <h1 className="text-4xl text-center text-red-500 my-8">Update Coffee {name} </h1>
            <div className="w-3/4 mx-auto bg-[#ecf4f0] p-4 rounded-lg">
                <form onSubmit={handleUpdateCoffee}>
                    {/* form row 1 */}
                    <div className="flex gap-3 mb-8 ">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Coffee Name</span>
                            </label>
                            <input type="text" placeholder="Coffee Name" defaultValue={name} name="name" className="input input-bordered" />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input type="text" placeholder="Available Quantity" defaultValue={quantity} name="quantity" className="input input-bordered" />
                        </div>
                    </div>
                    {/* form row 2 */}
                    <div className="flex gap-3 mb-8">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Supplier Name</span>
                            </label>
                            <input type="text" placeholder="Supplier Name" defaultValue={supplier} name="supplier" className="input input-bordered" />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <input type="text" placeholder="Taste" defaultValue={taste} name="taste" className="input input-bordered" />
                        </div>
                    </div>
                    {/* form row 3 */}
                    <div className="flex gap-3 mb-8">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" placeholder="Category" defaultValue={category} name="category" className="input input-bordered" />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input type="text" placeholder="Details" defaultValue={details} name="details" className="input input-bordered" />
                        </div>
                    </div>
                    {/* form row 4 */}
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" placeholder="Photo Url" defaultValue={photo} name="photo" className="input input-bordered" />
                        </div>
                       
                    </div>
                    <input type="submit" value="Update Coffee" className="btn btn-block bg-slate-600 text-white" />
                </form>
            </div>

        </div>
            
        </div>
    );
};

export default UpdateCoffee;