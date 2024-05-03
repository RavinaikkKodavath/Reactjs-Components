import React from "react";

//props are in object type {['x','y']}
export default function GridComponent(props) {
  return (
    <div className="container-fluid">
      <table className="table table-hover table-dark caption-top">
        <caption>{props.caption}</caption>
        <thead>
          <tr>
            {props.fields.map((feild) => (
              <th key={feild}>{feild} </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* here we r applying the js object.keys method to read each keys from coming object eg : name:'hindu' */}
          {props.data.map((item) => (
            <tr key={item}>
              {Object.keys(item).map((key) => (
                <td key={item[key]}> {item[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
