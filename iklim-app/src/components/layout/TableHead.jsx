import React from "react";
import TableBody from "./TableBody";

import { getDecimalRound } from "../../helper/decimalAdjustment";

const Table = props => {
  return (
    <div>
      <div className='table-title'>
        <h4>Data Table</h4>
      </div>
      <table className='table-fill'>
        <thead>
          <tr>
            <th className='text-center '>{props.name}</th>
            <th className='text-center '>{props.suhu}</th>
            <th className='text-center '>{props.perbedaan}</th>
          </tr>
        </thead>
        {props.dataCity.map((data, index) => {
          const { averageDiff, averageTemp } = data[1];
          return (
            <TableBody
              key={index}
              date={data[0]}
              temp={getDecimalRound(averageTemp)}
              differ={getDecimalRound(averageDiff)}
            />
          );
        })}
      </table>
    </div>
  );
};

Table.defaultProps = {
  suhu: "Suhu",
  perbedaan: "Perbedaan"
};

export default Table;
