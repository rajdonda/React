import { getDatabase, ref, set } from "firebase/database";
import { app } from "../../firebase.js";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Add() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const db = getDatabase(app);
        const id = Math.floor(Math.random() * 100000);
        try {
            await set(ref(db, `users/${id}`), {
                name: name,
                phone: phone
            });
            alert("Record added successfully to Firebase");
            setName("");
            setPhone("");
            navigate("/");
        } catch (error) {
            console.error("Error adding record to Firebase: ", error);
            alert("Error adding record to Firebase");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4 text-success">Add Record</h2>
            <form onSubmit={handleSubmit} className="w-50 mx-auto bg-light p-4 rounded shadow">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input
                        type="text"
                        id="name"
                        className="form-control"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number:</label>
                    <input
                        type="tel"
                        id="phone"
                        className="form-control"
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-success w-100" disabled={isSubmitting || !name || !phone}>
                    {isSubmitting ? "Submitting..." : "Submit"}
                </button>
            </form>
            <div className="text-center mt-3">
                <Link to="/" className="btn btn-secondary">View Records</Link>
            </div>
        </div>
    );
}

export default Add;