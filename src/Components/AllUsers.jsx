

const AllUsers = () => {
   
    return (
        <div>
            <h1 className="text-3xl font-bold text-center py-8">All users </h1>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                       <tr>
                                <th>0</th>
                                <td>fsdg</td>
                                <td>dfg@gf</td>
                                <td>gdfg</td>
                                
                            </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;