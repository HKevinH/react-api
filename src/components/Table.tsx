import { useState } from "react";
import { Player, useFetchData } from "../hook/useFetchData";
import React from "react";

export const TableResult = () => {
  const [result, setResult] = useState([]);
  const { dataPlayers } = useFetchData();
  console.log(dataPlayers);
  const data: Player[] = [
    { name: "asddads", country: "CO", totalSize: 100, size: 10 },
    { name: "asddads", country: "CO", totalSize: 10, size: 10 },
    { name: "asddads", country: "CO", totalSize: 100, size: 10 },
    { name: "asddads", country: "CO", totalSize: 100, size: 10 },
    { name: "asddads", country: "CO", totalSize: 100, size: 10 },
  ];

  return (
    <table>
      <thead>
        <tr>Deportista</tr>
        <tr>Pais</tr>
        <tr>Peso</tr>

        <tr>Total Peso</tr>
      </thead>
      <tbody>
        {data.map((p, index) => (
          <tr key={index}>
            <td>{p.name}</td>
            <td>{p.country}</td>
            <td>{p.size}</td>
            <td>{p.totalSize}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
