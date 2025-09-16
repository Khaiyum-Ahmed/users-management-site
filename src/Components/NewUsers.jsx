
const NewUsers = () => {

    const handleNewUser = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const gender = form.gender.value;
        // const gender = form.querySelector('input[name="gender"]:checked');
        const status = form.status.value;
        const users = { email, password, gender, status }
        console.log('user saved', users);

        // send data to the server

        fetch('http://localhost:5000/users',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(users)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            form.reset();
        })

    }
    return (
        <div>
            <h1 className="text-3xl text-center font-bold py-8">new users </h1>
            <div className="hero">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleNewUser}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name="email" className="input" placeholder="Email" />

                                <label className="label">Password</label>
                                <input type="password" name="password" className="input" placeholder="Password" />

                                <div className="my-3 font-semibold">
                                    <label className="label mr-4">Gender</label>
                                    <input type="radio" name="gender" className="radio radio-accent radio-xs" value="male" /> Male
                                    <input type="radio" name="gender" className="radio ml-2 radio-accent radio-xs" value="female" /> FeMale

                                </div>
                                <div className="font-semibold">
                                    <label className="label mr-4">Status</label>
                                    <input type="radio" name="status" className="radio radio-accent radio-xs" value="active" /> Active
                                    <input type="radio" name="status" className="radio ml-2 radio-accent radio-xs" value="inactive" /> Inactive

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