// import React from "react";
import React from "react";
import "./table.css";

function DynamicTable() {
  const data = [
    {
      id: 1,
      name: "Verilog Introduction",
      subData: ["Introduction", "About verilog", "Verification and verilog"],
    },
    {
      id: 2,
      name: "Data Types",
      subData: ["Introduction", "String & Event", "User-defined"],
    },
    {
      id: 2,
      name: "Data Types",
      subData: ["Introduction", "Enum Examples", "Class"],
    },
    { id: 2, name: "Data Types", subData: ["Introduction", 30, 40] },
    { id: 3, name: "Bob", subData: ["Introduction", 30, 40] },
    { id: 4, name: "Sally", subData: ["Introduction", 35, 45] },
    { id: 4, name: "Sally", subData: ["Introduction", 35, 45] },
    { id: 4, name: "Sally", subData: ["Introduction", 35, 45] },
    { id: 5, name: "Jane", subData: ["Introduction", 25, 35] },
    { id: 5, name: "Jane", subData: ["Introduction", 25, 35] },
    { id: 5, name: "Jane", subData: ["Introduction", 25, 35] },
  ];

  //   const subHeaders = [
  //     "SubData 1",
  //     "SubData 2",
  //     "SubData 3",
  //     "SubData 4",
  //     "SubData 5",
  //     "SubData 6",
  //   ];

  const getSpan = (value, column) => {
    let span = 1;
    for (let i = column + 1; i < data.length; i++) {
      if (data[i].name === value) {
        span++;
      } else {
        break;
      }
    }
    return span;
  };
  const getSpan2 = (value, column) => {
    let span = 1;
    for (let i = column + 1; i < data.length; i++) {
      if (data[i].id === value) {
        span++;
      } else {
        break;
      }
    }
    return span;
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th colSpan="6" style={{ textAlign: "center" }}>
            Sub Data
          </th>
        </tr>
        <tr>
          {/* <th>ID</th>
          <th>Name</th>
          {subHeaders.map((header, index) => (
            <th key={index} colSpan="1" style={{ textAlign: "center" }}>
              {header}
            </th>
          ))} */}
        </tr>
      </thead>
      <tbody>
        {data.map((item, rowIndex) => (
          <tr key={item.id}>
            {/* <td>{item.id}</td> */}
            {rowIndex > 0 && item.id === data[rowIndex - 1].id ? null : (
              <td rowSpan={getSpan2(item.id, rowIndex)}>{item.id}</td>
            )}
            {rowIndex > 0 && item.name === data[rowIndex - 1].name ? null : (
              <td rowSpan={getSpan(item.name, rowIndex)}>{item.name}</td>
            )}
            {item.subData.map((subItem, index) => (
              <td key={index}>
                <a href="/">{subItem}</a>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DynamicTable;
