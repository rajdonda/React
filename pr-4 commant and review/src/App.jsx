import { useState, useEffect, useRef } from "react";
import './DynamicForm.css';

function App() {

  const [tableInput, SetInput] = useState([
    { id: "", name: "", email: "", salary: "" }
  ]);

  const inputRefs = useRef([]);

  useEffect(() => {
    const storedData = localStorage.getItem('tableInput');
    if (storedData) {
      SetInput(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tableInput', JSON.stringify(tableInput));
  }, [tableInput]);

  const add = () => {
    let newfield = { id: Math.floor(Math.random() * 1000), name: "", email: "", salary: "" };
    SetInput([...tableInput, newfield]);
  }

  const remove = (id) => {
    let updatedata = tableInput.filter((item) => item.id !== id);
    SetInput(updatedata);
  }

  const InputChange = (id, field, value) => {
    const updatedtableInput = tableInput.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    SetInput(updatedtableInput);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      add();
    }
  };

  return (
    <div className="main" align="center">
      <h1>Dynamic Table Management</h1>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email Address</th>
            <th>Salary</th>
            <th><button className="btn1" onClick={add}> + </button></th>
          </tr>
        </thead>
        <tbody>
          {
            tableInput.map((val, index) => (
              <tr key={val.id} align="center">
                <td>
                  <input
                    type="text"
                    value={val.name}
                    onChange={(e) => InputChange(val.id, 'name', e.target.value)}
                    placeholder="Enter Your Name"
                    ref={el => inputRefs.current[index] = el}
                    onKeyPress={handleKeyPress}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={val.email}
                    onChange={(e) => InputChange(val.id, 'email', e.target.value)}
                    placeholder="Enter Your Email Id"
                    onKeyPress={handleKeyPress}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={val.salary}
                    onChange={(e) => InputChange(val.id, 'salary', e.target.value)}
                    placeholder="Enter Your Salary"
                    onKeyPress={handleKeyPress}
                  />
                </td>
                <td>
                  <button className="btn2" onClick={() => remove(val.id)}>X</button>
                </td>
              </tr>
            ))
          }

        </tbody>
      </table>

    </div>
  );
}

export default App;
