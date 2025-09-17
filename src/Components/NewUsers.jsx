
const NewUsers = () => {

    return (
        <div>
            <h1 className="text-3xl text-center font-bold py-8">new users </h1>
            <div className="hero">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form >
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" name="name" className="input" placeholder="Email" />

                                <label className="label">Email</label>
                                <input type="password" name="email" className="input" placeholder="Password" />

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