import React, { Component } from "react";

class Person extends Component {
  constructor() {
    super();
    console.log(this.props);
  }
  render() {
    return (
      <div style={{ textAlign: "center", margin: "auto", width: "80%", backgroundColor: "lightblue" }}> {/* Changed background color */}
        <h1
          style={{
            color: new Date().getMilliseconds() % 2 === 0 ? "green" : "purple", // Changed color
            animation: "blink 0s infinite",
            fontSize: "2rem", // Changed font size
          }}
        >
          User explorer
        </h1>
        <table
          style={{
            margin: "auto",
            border: "1px solid black",
            borderCollapse: "collapse",
            width: "100%", // Changed table width
          }}
          cellSpacing="5"
          cellPadding="5"
        >
          <thead>
            <tr>
              <th
                style={{
                  border: "1px solid black",
                  backgroundColor: "lightgray",
                  color: "black", // Changed text color
                  fontSize: "1.5rem", // Changed font size
                }}
              >
                Grid
              </th>
              <th
                style={{
                  border: "1px solid black",
                  backgroundColor: "lightgray",
                  color: "black", // Changed text color
                  fontSize: "1.5rem", // Changed font size
                }}
              >
                Name
              </th>
              <th
                style={{
                  border: "1px solid black",
                  backgroundColor: "lightgray",
                  color: "black", // Changed text color
                  fontSize: "1.5rem", // Changed font size
                }}
              >
                Email
              </th>
              <th
                style={{
                  border: "1px solid black",
                  backgroundColor: "lightgray",
                  color: "black", // Changed text color
                  fontSize: "1.5rem", // Changed font size
                }}
              >
                Password
              </th>
              <th
                style={{
                  border: "1px solid black",
                  backgroundColor: "lightgray",
                  color: "black", // Changed text color
                  fontSize: "1.5rem", // Changed font size
                }}
              >
                Courses
              </th>
              <th
                style={{
                  border: "1px solid black",
                  backgroundColor: "lightgray",
                  color: "black", // Changed text color
                  fontSize: "1.5rem", // Changed font size
                }}
              >
                City
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.Meet.map((person, i) => (
              <tr key={i}>
                <td style={{ border: "1px solid black", fontWeight: "bold", fontSize: "1.5rem" }}>
                  {person.grid}
                </td>
                <td style={{ border: "1px solid black", fontWeight: "bold", fontSize: "1.5rem" }}>
                  {person.name}
                </td>
                <td style={{ border: "1px solid black", fontWeight: "bold", fontSize: "1.5rem" }}>
                  {person.email}
                </td>
                <td style={{ border: "1px solid black", fontWeight: "bold", fontSize: "1.5rem" }}>
                  {person.password}
                </td>
                <td style={{ border: "1px solid black", fontWeight: "bold", fontSize: "1.5rem" }}>
                  {person.course.join(", ")}
                </td>
                <td style={{ border: "1px solid black", fontWeight: "bold", fontSize: "1.5rem" }}>
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