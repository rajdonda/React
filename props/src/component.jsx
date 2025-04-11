import React from "react";

function Component({ a, arr, object,arrobject }) {
    return (
        <div>

            <p>{a}</p>
            <h2>arr</h2>
            <p>{arr}</p>
              <h1>obj</h1>
              <h4>id :- {object.id}</h4>
              <h4>name :- {object.name}</h4>
              <h4>age :- {object.age}</h4>
    
    <table border={1}>
        <thead>
            <th>id</th>
            <th>name</th>
            <th>age</th>
        </thead>
        <tbody>
            {
                arrobject.map((value,index)=>{
                    return(
                        <tr>
                            <td>{value.id}</td>
                            <td>{value.name}</td>
                            <td>{value.age}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
        </div>
    );
}

export default Component;
