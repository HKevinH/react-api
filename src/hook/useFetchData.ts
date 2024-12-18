import { useEffect, useState } from "react";
import { getDataPlayers } from "../httpclient/axios.instance";

export interface Player {
  name: string;
  size: number;
  totalSize: number;
  country: string;
}

export interface Result {
  envion: number;
  idDeportista: number;
  arranque: number;
}

export const useFetchData = () => {
  const [dataPlayers, setDataPlayer] = useState<Player[] | null>(null);

  const getDataPlayer = async () => {
    try {
      console.log("entre");
      const res = await getDataPlayers();
      console.log(res, "res");
      setDataPlayer(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!dataPlayers) {
      getDataPlayer();
    }
  }, []);

  return {
    dataPlayers,
  };
};
