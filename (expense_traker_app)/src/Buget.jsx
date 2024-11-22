import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { budgetAdd, budgetExpenstion, deletUser } from './Redux/actions/actionBudget'
import './buget.css'

function Budget() {
    const [Budget, setBudget] = useState('')
    const [name, setName] = useState('')
    const [Amount, setAmount] = useState('')
    const [totalBudget, setTotalBudget] = useState(null)
    const dispatch = useDispatch()
    const bDataes = useSelector(state => state.bdeta.budgetData)

    const deletDate = (id) => {
        dispatch(deletUser(id))
    }

    const handleSetBudget = (e) => {
        e.preventDefault()
        if (!totalBudget) {
            setTotalBudget(parseFloat(Budget))
            dispatch(budgetAdd({ Budget: parseFloat(Budget) }))
            setBudget('')
        } else {
            alert('Budget can only be set once!')
        }
    }

    const handleUpdateBudget = (e) => {
        e.preventDefault()
        if (totalBudget) {
            setTotalBudget(parseFloat(Budget))
            dispatch(budgetAdd({ Budget: parseFloat(Budget) }))
            setBudget('')
        } else {
            alert('Please set a budget first!')
        }
    }

    const handleAddExpense = (e) => {
        e.preventDefault()
        if (name && Amount) {
            let obj = {
                id: Math.floor(Math.random()*1000000),
                name: name,
                Amount: parseFloat(Amount),
            }
            dispatch(budgetExpenstion(obj))
            setName('')
            setAmount('')
        } else {
            alert('Please fill in both fields for the expense!')
        }
    }

    const totalExpenses = bDataes.reduce((total, item) => {
        return total + (parseFloat(item.Amount) || 0)
    }, 0)

    const remainingBudget = totalBudget ? totalBudget - totalExpenses : 0

    return (
        <>
            <div>
                <div align='center'>
                    <h2>Budget App</h2>
                    {!totalBudget && (
                        <form onSubmit={handleSetBudget}>
                            <table border={1}>
                                <tr>
                                    <td>Set Budget</td>
                                </tr>
                                <tr>
                                    <td>
                                        <input
                                            type="text"
                                            value={Budget}
                                            onChange={(e) => setBudget(e.target.value)}
                                            disabled={!!totalBudget}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input
                                            type="submit"
                                            value="Set Budget"
                                            disabled={!!totalBudget}
                                        />
                                    </td>
                                </tr>
                            </table>
                        </form>
                    )}
                    {totalBudget && (
                        <form onSubmit={handleUpdateBudget}>
                            <table border={1}>
                                <tr>
                                    <td>Update Budget</td>
                                </tr>
                                <tr>
                                    <td>
                                        <input
                                            type="text"
                                            value={Budget}
                                            onChange={(e) => setBudget(e.target.value)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="submit" value="Update Budget" />
                                    </td>
                                </tr>
                            </table>
                        </form>
                    )}
                </div>

                <div align='center'>
                    <h2>Expenses App</h2>
                    <form onSubmit={handleAddExpense}>
                        <table border={1}>
                            <tr>
                                <td>Add Expense</td>
                            </tr>
                            <tr>
                                <td>
                                    <input
                                        type="text"
                                        placeholder='Expense Name'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input
                                        type="text"
                                        placeholder='Amount'
                                        value={Amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="submit" value="Add Expense" />
                                </td>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>

            <br />

            <div align='center'>
                <h3>Expense List</h3>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Expense Name</th>
                            <th>Amount</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bDataes.length > 0 ? (
                            bDataes.map((val, index) => (
                                <tr key={index}>
                                    <td>{val.name}</td>
                                    <td>{val.Amount}</td>
                                    <td><button onClick={() => deletDate(val.id)}>delete</button></td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3">No expenses added yet.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div align='center'>
                <h2>Budget Summary</h2>
                <table border={1}>
                    <tbody>
                        <tr>
                            <td>Total Budget:</td>
                            <td>{totalBudget || 0}</td>
                        </tr>
                        <tr>
                            <td>Total Expenses:</td>
                            <td>{totalExpenses}</td>
                        </tr>
                        <tr>
                            <td>Remaining Budget:</td>
                            <td>{remainingBudget}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Budget
