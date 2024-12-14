import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const EmployeeView = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
        setEmployees(storedEmployees);
    }, []);

    const handleDelete = (id) => {
        const updatedEmployees = employees.filter(emp => emp.id !== id);
        localStorage.setItem('employees', JSON.stringify(updatedEmployees));
        setEmployees(updatedEmployees);
    };

    const handleUpdate = (id) => {
        const employeeToUpdate = employees.find(emp => emp.id === id);
        const updatedName = prompt("Update Name:", employeeToUpdate.name);
        const updatedEmail = prompt("Update Email:", employeeToUpdate.email);
        const updatedCity = prompt("Update City:", employeeToUpdate.city);
        const updatedSalary = prompt("Update Salary:", employeeToUpdate.salary);
        const updatedDesignation = prompt("Update Designation:", employeeToUpdate.designation);

        // Validation for updated fields
        if (!updatedName || !updatedEmail || !updatedCity || !updatedSalary || !updatedDesignation) {
            alert("All fields are required for update.");
            return;
        }

        if (isNaN(updatedSalary) || updatedSalary <= 0) {
            alert("Salary must be a positive number.");
            return;
        }

        const updatedEmployee = {
            ...employeeToUpdate,
            name: updatedName,
            email: updatedEmail,
            city: updatedCity,
            salary: updatedSalary,
            designation: updatedDesignation
        };

        const updatedEmployees = employees.map(emp => emp.id === id ? updatedEmployee : emp);
        localStorage.setItem('employees', JSON.stringify(updatedEmployees));
        setEmployees(updatedEmployees);
        alert("Employee details updated successfully!"); // Show message after update
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center">Employee List</h1>
            <ul className="list-group">
                {employees.length > 0 ? (
                    employees.map(emp => (
                        <li key={emp.id} className="list-group-item d-flex justify-content-between align-items-center">
                            {emp.name} - {emp.email} - {emp.city} - {emp.salary} - {emp.designation}
                            <div>
                                <button className="btn btn-warning btn-sm me-2" onClick={() => handleUpdate(emp.id)}>Update</button>
                                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(emp.id)}>Delete</button>
                            </div>
                        </li>
                    ))
                ) : (
                    <li className="list-group-item text-center">No employees found.</li>
                )}
            </ul>
        </div>
    );
};

export default EmployeeView;
