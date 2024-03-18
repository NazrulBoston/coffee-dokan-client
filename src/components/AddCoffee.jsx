import Swal from "sweetalert2";

const AddCoffee = () => {


const handleAddCoffee = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = { name, quantity, supplier, taste, category, details, photo}
    console.log(newCoffee)

    // send data to the server
    fetch('http://localhost:5002/coffee',{
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(newCoffee)

        
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                position: "top-middle",
                icon: "success",
                title: "Successfully added",
                showConfirmButton: false,
                timer: 1500
              });
        }


    })


}

    return (
        <div>
            <h1 className="text-4xl text-center text-red-500 my-8">Add a Coffee </h1>
            <div className="w-3/4 mx-auto bg-[#ecf4f0] p-4 rounded-lg">
                <form onSubmit={handleAddCoffee}>
                    {/* form row 1 */}
                    <div className="flex gap-3 mb-8 ">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Coffee Name</span>
                            </label>
                            <input type="text" placeholder="Coffee Name" name="name" className="input input-bordered" />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input type="text" placeholder="Available Quantity" name="quantity" className="input input-bordered" />
                        </div>
                    </div>
                    {/* form row 2 */}
                    <div className="flex gap-3 mb-8">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Supplier Name</span>
                            </label>
                            <input type="text" placeholder="Supplier Name" name="supplier" className="input input-bordered" />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <input type="text" placeholder="Taste" name="taste" className="input input-bordered" />
                        </div>
                    </div>
                    {/* form row 3 */}
                    <div className="flex gap-3 mb-8">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" placeholder="Category" name="category" className="input input-bordered" />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input type="text" placeholder="Details" name="details" className="input input-bordered" />
                        </div>
                    </div>
                    {/* form row 4 */}
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" placeholder="Photo Url" name="photo" className="input input-bordered" />
                        </div>
                       
                    </div>
                    <input type="submit" value="Add Coffee" className="btn btn-block bg-slate-600 text-white" />
                </form>
            </div>

        </div>
    );
};

export default AddCoffee;