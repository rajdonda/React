import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deletUser } from '../Redux/Action/curdActions';

function View() {
  const user = useSelector(state => state.curd.userData)
  const dispatch = useDispatch()

  const deleteData = (id) => {
    dispatch(deletUser(id))
  }

  return (
    <div className="view-container">
      <h2>User List</h2>
      
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            user.map((val) => (
              <tr key={val.id}>
                <td>{val.name}</td>
                <td>{val.phone}</td>
                <td>
                  <button className="delete-button" onClick={() => deleteData(val.id)}>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      
      <Link to="/Add" className="add-link">
        <button className="add-button">Add +</button>
      </Link>

      <style jsx>{`
        .view-container {
          padding: 20px;
          max-width: 800px;
          margin: 0 auto;
          background-color: #1e1e2f;
          border-radius: 12px;
          box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
        }

        h2 {
          text-align: center;
          font-size: 26px;
          color: #e0e0e0;
          margin-bottom: 24px;
        }

        .user-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 24px;
        }

        .user-table th, .user-table td {
          padding: 14px;
          text-align: left;
          border: 1px solid #444;
        }

        .user-table th {
          background-color: #3a3a5c;
          color: #f0f0f0;
        }

        .user-table td {
          background-color: #2a2a3c;
          color: #d0d0d0;
        }

        .delete-button {
          background-color: #ff6b6b;
          color: white;
          border: none;
          padding: 8px 16px;
          cursor: pointer;
          border-radius: 6px;
          font-size: 15px;
          transition: background-color 0.3s;
        }

        .delete-button:hover {
          background-color: #ff4c4c;
        }

        .add-link {
          display: block;
          text-align: center;
          margin-top: 24px;
        }

        .add-button {
          background-color: #6bcf63;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 18px;
          transition: background-color 0.3s;
        }

        .add-button:hover {
          background-color: #5abf53;
        }

        @media (max-width: 768px) {
          .view-container {
            padding: 18px;
          }

          .user-table th, .user-table td {
            padding: 12px;
          }

          .add-button {
            padding: 10px 20px;
          }
        }
      `}</style>
    </div>
  )
}

export default View
