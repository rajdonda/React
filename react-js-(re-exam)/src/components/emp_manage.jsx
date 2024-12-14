import React, { useEffect, useState } from 'react';
import { createStore } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = {
    employees: JSON.parse(localStorage.getItem('employees')) || []
};

const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';
const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE';

const addEmployee = (employee) => ({ type: ADD_EMPLOYEE, payload: employee });
const deleteEmployee = (id) => ({ type: DELETE_EMPLOYEE, payload: id });
const updateEmployee = (employee) => ({ type: UPDATE_EMPLOYEE, payload: employee });

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

const store = createStore(employeeReducer);

const EmployeeManagement = () => {
    const [empName, setEmpName] = useState('');
    const [empEmail, setEmpEmail] = useState('');
    const [empPassword, setEmpPassword] = useState('');
    const [empCity, setEmpCity] = useState('');
    const [empSalary, setEmpSalary] = useState('');
    const [empDesignation, setEmpDesignation] = useState('');

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

    const handleSalaryChange = (e) => {
        const value = e.target.value;
        if (value < 0) {
            alert("Salary cannot be negative.");
            return;
        }
        setEmpSalary(value);
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
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <div className="card p-4">
                <h1 className="text-center">Employee Management System</h1>
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
                    <input type="number" className="form-control" placeholder="Salary" value={empSalary} onChange={handleSalaryChange} />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Designation" value={empDesignation} onChange={(e) => setEmpDesignation(e.target.value)} />
                </div>
                <button className="btn btn-primary" onClick={handleAddEmployee}>Add Employee</button>
            </div>
        </div>
    );
};

export default EmployeeManagement;
