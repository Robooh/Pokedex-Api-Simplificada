import React, { useEffect, useState } from "react";
import { Logo } from "../../Componentes/Header/header";
import Carton from "../../Componentes/Carton/carton";
import Main from "../Misc/menu";
import axios from "axios";


export const Home = () => {
  const [results, setResults] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/?limit=9&offset=${offset}`)
    .then((response) => setResults(response.data.results));
}, [offset]);

  const loadMore = () => {
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/?limit=9&offset=${offset + 9}`)
    .then((response) => {
      setResults((prevResults) => [...prevResults, ...response.data.results]);
      setOffset((prevOffset) => prevOffset + 9);
    });
  };

  const loadPrevious = () => {
    setOffset((prevOffset) => Math.max(prevOffset - 9, 0));
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const filteredResults = results.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Logo />
      <Main onSearch={handleSearch} />

      <div style={{ display: "flex", justifyContent: "center", backgroundColor: "#6E6E6E" }}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a Pokemon..."
          style={{ border: "solid 1px ##0A0C10",borderRadius: "4px", padding: "5px", marginRight: "5px", marginTop: "4px" }}/>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "#6E6E6E"  }}>
      <button onClick={loadPrevious} style={{ borderRadius: "10px", backgroundColor: "red", color: "white" }}> Voltar </button>

        {filteredResults.length < 90 && <button onClick={loadMore} style={{ borderRadius: '10px', backgroundColor: 'red', color: 'white' }}>Caregar</button>}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "01px" }}>
        {filteredResults.map((result, key) => (
          <Pokemon data={result} key={key} />
        ))}
      </div>
    </div>
  ) 
};

export const Pokemon = ({ data, key }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    axios.get(data.url).then((response) => setDetails(response.data));
  }, [data.url]);

  if (details === null) {
    return <div>-</div>;
  }

  return (
    <div>
      <Carton 
        name={details.name}
        img={details.sprites.front_shiny}
        type={details.types.map(type => type.type.name).join(', ')}
        key={details.id}
      />
    </div>
  );
};