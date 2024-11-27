import { getDatabase, onValue, ref, remove } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { app } from '../../firebase';
import 'bootstrap/dist/css/bootstrap.min.css';

const View = () => {
    const navigate = useNavigate();
    const [record, setRecord] = useState(null);

    const db = getDatabase(app);

    const viewData = () => {
        const users = ref(db, "users");

        onValue(users, (u) => {
            const data = u.val();
            setRecord(data);
        });
    };

    useEffect(() => {
        viewData();
    }, []);

    const deleteUser = (id) => {
        const users = ref(db, `users/${id}`);
        remove(users)
            .then(() => {
                alert("Record deleted");
                viewData(); 
            })
            .catch((error) => {
                console.error("Error deleting user: ", error);
                alert("Error deleting user");
            });
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4 text-success">View Users</h2>
            <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>Srno</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        record ? Object.entries(record).map(([key, val]) => {
                            return (
                                <tr key={key}>
                                    <td>{key}</td>
                                    <td>{val.name}</td>
                                    <td>{val.phone}</td>
                                    <td>
                                        <button 
                                            className="btn btn-danger" 
                                            onClick={() => deleteUser(key)}>
                                            Delete
                                        </button>
                                        &nbsp;
                                        <button 
                                            className="btn btn-warning" 
                                            onClick={() => navigate(`/edit`, { state: [key, val] })}>
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            );
                        }) : (
                            <tr>
                                <td colSpan="4" className="text-center">No records found</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <div className="text-center mt-3">
                <Link to={`/add`} className="btn btn-success">Add New User</Link>
            </div>
        </div>
    );
};

export default View;