import React from "react";

const TableBody = props => {
  return (
    <>
      <tbody className='table-hover'>
        <tr>
          <td className='text-center '>{props.date}</td>
          <td className='text-center '>{props.temp}°C</td>
          <td className='text-center '>{props.differ}°C</td>
        </tr>
      </tbody>
    </>
  );
};

export default TableBody;
