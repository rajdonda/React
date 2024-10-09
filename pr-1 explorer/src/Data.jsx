import React, { Component } from "react";

class Person extends Component {
  constructor() {
    super();
    console.log(this.props);
  }

  render() {
    const headingStyle = {
      color: new Date().getMilliseconds() % 2 === 0 ? "#4caf50" : "#673ab7", 
      fontSize: "2.5rem",
      fontWeight: "bold",
      marginBottom: "20px",
      transition: "color 0.5s ease", 
    };

    return (
      <div
        style={{
          textAlign: "center",
          margin: "auto",
          width: "80%",
          backgroundColor: "#f9f9f9", 
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
        }}
      >
        <h1 style={headingStyle}>User Explorer</h1>
        <table
          style={{
            margin: "auto",
            borderCollapse: "collapse",
            width: "90%", 
            backgroundColor: "#fff", 
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)", 
            borderRadius: "10px",
            overflow: "hidden",
          }}
          cellSpacing="5"
          cellPadding="15"
        >
          <thead>
            <tr>
              <th
                style={{
                  backgroundColor: "#4caf50",
                  color: "#ffffff", 
                  padding: "15px",
                  fontSize: "1.2rem",
                  textAlign: "left",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Grid
              </th>
              <th
                style={{
                  backgroundColor: "#4caf50",
                  color: "#ffffff",
                  padding: "15px",
                  fontSize: "1.2rem",
                  textAlign: "left",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Name
              </th>
              <th
                style={{
                  backgroundColor: "#4caf50",
                  color: "#ffffff",
                  padding: "15px",
                  fontSize: "1.2rem",
                  textAlign: "left",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Email
              </th>
              <th
                style={{
                  backgroundColor: "#4caf50",
                  color: "#ffffff",
                  padding: "15px",
                  fontSize: "1.2rem",
                  textAlign: "left",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Password
              </th>
              <th
                style={{
                  backgroundColor: "#4caf50",
                  color: "#ffffff",
                  padding: "15px",
                  fontSize: "1.2rem",
                  textAlign: "left",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Courses
              </th>
              <th
                style={{
                  backgroundColor: "#4caf50",
                  color: "#ffffff",
                  padding: "15px",
                  fontSize: "1.2rem",
                  textAlign: "left",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                City
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.Meet.map((person, i) => (
              <tr
                key={i}
                style={{
                  backgroundColor: i % 2 === 0 ? "#f9f9f9" : "#ffffff", 
                  borderBottom: "1px solid #dddddd",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f1f1f1")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = i % 2 === 0 ? "#f9f9f9" : "#ffffff")}
              >
                <td style={{ padding: "15px", fontWeight: "bold", fontSize: "1.1rem", color: "#333" }}>
                  {person.grid}
                </td>
                <td style={{ padding: "15px", fontWeight: "500", fontSize: "1.1rem", color: "#333" }}>
                  {person.name}
                </td>
                <td style={{ padding: "15px", fontWeight: "500", fontSize: "1.1rem", color: "#333" }}>
                  {person.email}
                </td>
                <td style={{ padding: "15px", fontWeight: "500", fontSize: "1.1rem", color: "#333" }}>
                  {person.password}
                </td>
                <td style={{ padding: "15px", fontWeight: "500", fontSize: "1.1rem", color: "#333" }}>
                  {person.course.join(", ")}
                </td>
                <td style={{ padding: "15px", fontWeight: "500", fontSize: "1.1rem", color: "#333" }}>
                  {person.city}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Person;
