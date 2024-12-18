import { useState } from "react";
import React from "react";
import { Player, Result } from "../hook/useFetchData";

export const FormAddResult = () => {
  const [idDeportista, setDeportistaId] = useState("");
  const [arraquque, setArranque] = useState<number>(0);
  const [envion, setEnvion] = useState<number>(0);

  const handleSub = async (e) => {
    e.preventDefault();

    if (!idDeportista) {
      alert("errror");
    }
    const newResultado: Result = {
      idDeportista: idDeportista,
      arranque: arraquque,
      envion: envion,
    };

    console.log(newResultado, "as");
  };

  return (
    <form onSubmit={handleSub}>
      <select onChange={(e) => setDeportistaId(e.currentTarget.value)}>
        <option value="">Selecione uno</option>
        <option value="1">Carlos Alviz</option>
        <option value="2">Andres Sabogal</option>
      </select>
      <label>Arranque</label>
      <input
        onChange={(e) => setArranque(e.currentTarget.value)}
        type="number"
        placeholder="Arranque (KG)"
      />
      <label>Envion</label>
      <input
        type="number"
        onChange={(e) => setEnvion(e.currentTarget.value)}
        placeholder="Envion (KG)"
      />

      <button>Agregar</button>
    </form>
  );
};
