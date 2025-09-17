import Swal from "sweetalert2";

const NewUsers = () => {

    const handleNewUsers = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const gender = form.gender.value;
        const status = form.status.value;
        const usersData = { name, email, gender, status }
        console.log(usersData)

        // data send the server 
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(usersData)
        })
            .then(res => res.json())
            .then(data => {
                
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset();
                }

            })

    }

    return (
        <div>
            <h1 className="text-3xl text-center font-bold py-8">new users </h1>
            <div className="hero">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleNewUsers}>
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" name="name" className="input" placeholder="Name" />

                                <label className="label">Email</label>
                                <input type="email" name="email" className="input" placeholder="Email" />

                                <div className="my-3 font-semibold">
                                    <label className="label mr-4">Gender</label>
                                    <input type="radio" name="gender" className="radio radio-accent radio-xs" value="Male" /> Male
                                    <input type="radio" name="gender" className="radio ml-2 radio-accent radio-xs" value="Female" /> FeMale

                                </div>
                                <div className="font-semibold">
                                    <label className="label mr-4">Status</label>
                                    <input type="radio" name="status" className="radio radio-accent radio-xs" value="Active" /> Active
                                    <input type="radio" name="status" className="radio ml-2 radio-accent radio-xs" value="Inactive" /> Inactive

                                </div>

                                <button className="btn btn-accent mt-4">Save</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewUsers;