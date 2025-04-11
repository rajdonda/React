import React, { useEffect, useState } from 'react';
import { createStore } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';

// Initial State
const initialState = {
    employees: JSON.parse(localStorage.getItem('employees')) || []
};

// Action Types
const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';
const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE';

// Action Creators
const addEmployee = (employee) => ({ type: ADD_EMPLOYEE, payload: employee });
const deleteEmployee = (id) => ({ type: DELETE_EMPLOYEE, payload: id });
const updateEmployee = (employee) => ({ type: UPDATE_EMPLOYEE, payload: employee });

// Reducer
const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EMPLOYEE:
            const isDuplicate = state.employees.some(emp => emp.email === action.payload.email);
            if (isDuplicate) {
                alert("Employee with this email already exists.");
                return state;
            }
            const newEmployees = [...state.employees, action.payload];
            localStorage.setItem('employees', JSON.stringify(newEmployees));
            return { ...state, employees: newEmployees };

        case DELETE_EMPLOYEE:
            const filteredEmployees = state.employees.filter(emp => emp.id !== action.payload);
            localStorage.setItem('employees', JSON.stringify(filteredEmployees));
            return { ...state, employees: filteredEmployees };

        case UPDATE_EMPLOYEE:
            const updatedEmployees = state.employees.map(emp =>
                emp.id === action.payload.id ? action.payload : emp
            );
            localStorage.setItem('employees', JSON.stringify(updatedEmployees));
            return { ...state, employees: updatedEmployees };

        default:
            return state;
    }
};

// Create Redux Store
const store = createStore(employeeReducer);

// Main Component
const EmployeeManagement = () => {
    const [empName, setEmpName] = useState('');
    const [empEmail, setEmpEmail] = useState('');
    const [empPassword, setEmpPassword] = useState('');
    const [empCity, setEmpCity] = useState('');
    const [empSalary, setEmpSalary] = useState('');
    const [empDesignation, setEmpDesignation] = useState('');
    const [employees, setEmployees] = useState([]);

    // Sync with Redux Store
    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            const state = store.getState();
            setEmployees(state.employees);
        });
        return () => unsubscribe();
    }, []);

    // Validation
    const validateEmployeeData = () => {
        if (!empName || !empEmail || !empPassword || !empCity || !empSalary || !empDesignation) {
            alert("All fields are required.");
            return false;
        }
        if (empName.length < 3) {
            alert("Name must be at least 3 characters long.");
            return false;
        }
        if (isNaN(empSalary) || empSalary <= 0) {
            alert("Salary must be a positive number.");
            return false;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(empEmail)) {
            alert("Please enter a valid email address.");
            return false;
        }
        if (empPassword.length < 6) {
            alert("Password must be at least 6 characters long.");
            return false;
        }
        const cityPattern = /^[a-zA-Z\s]+$/;
        if (!cityPattern.test(empCity)) {
            alert("City must contain only letters.");
            return false;
        }
        const designationPattern = /^[a-zA-Z\s]+$/;
        if (!designationPattern.test(empDesignation)) {
            alert("Designation must contain only letters.");
            return false;
        }
        return true;
    };

    // Handlers
    const handleAddEmployee = () => {
        if (!validateEmployeeData()) {
            return;
        }
        const newEmployee = {
            id: Date.now(),
            name: empName,
            email: empEmail,
            password: empPassword,
            city: empCity,
            salary: empSalary,
            designation: empDesignation
        };
        store.dispatch(addEmployee(newEmployee));
        clearFields();
    };

    const handleDeleteEmployee = (id) => {
        store.dispatch(deleteEmployee(id));
    };

    const clearFields = () => {
        setEmpName('');
        setEmpEmail('');
        setEmpPassword('');
        setEmpCity('');
        setEmpSalary('');
        setEmpDesignation('');
    };

    return (
        <div className="container py-5">
            <h1 className="text-center mb-4">Employee Management System</h1>
            <div className="card p-4 mb-4">
                <h2>Add Employee</h2>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Name" value={empName} onChange={(e) => setEmpName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Email" value={empEmail} onChange={(e) => setEmpEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" placeholder="Password" value={empPassword} onChange={(e) => setEmpPassword(e.target.value)} />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="City" value={empCity} onChange={(e) => setEmpCity(e.target.value)} />
                </div>
                <div className="mb-3">
                    <input type="number" className="form-control" placeholder="Salary" value={empSalary} onChange={(e) => setEmpSalary(e.target.value)} />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Designation" value={empDesignation} onChange={(e) => setEmpDesignation(e.target.value)} />
                </div>
                <button className="btn btn-primary" onClick={handleAddEmployee}>Add Employee</button>
            </div>

            <div className="card p-4">
                <h2>Employee List</h2>
                <ul className="list-group">
                    {employees.length === 0 ? (
                        <li className="list-group-item">No employees added yet.</li>
                    ) : (
                        employees.map((emp) => (
                            <li key={emp.id} className="list-group-item d-flex justify-content-between align-items-center">
                                {emp.name} ({emp.designation}) - {emp.salary} Rs
                                <button className="btn btn-danger btn-sm" onClick={() => handleDeleteEmployee(emp.id)}>Delete</button>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
};

export default EmployeeManagement;
