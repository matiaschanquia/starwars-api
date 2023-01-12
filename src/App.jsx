import { useEffect, useState } from "react";
import Characters from "./components/Characters";

function App() {
    const [swAPI, setSwAPI] = useState({});
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    useEffect(() => {
      fetch(`https://swapi.dev/api/people/`)
        .then(res => res.json())
        .then(data => {
          setSwAPI(data);
          setLoading(false);
        });
    }, [])
    const handleClickBack = () => {
      setLoading(true);
      fetch(swAPI.previous)
        .then(res => res.json())
        .then(data => {
          setSwAPI(data);
          setLoading(false);
          setPage(page - 1);
        });
    }
    const handleClickNext = () => {
      setLoading(true);
      fetch(swAPI.next)
        .then(res => res.json())
        .then(data => {
          setSwAPI(data);
          setLoading(false);
          setPage(page + 1);
        });
    }

    return (
        <div className="container-app">
            <h1 className="titulo-sw">StarWars API</h1>
            <div className="btns-back-next">
              <button onClick={handleClickBack} disabled={swAPI.previous ? false : true}>Volver</button>
              <button onClick={handleClickNext} disabled={swAPI.next ? false : true}>Siguiente</button>
            </div>
            <p className="page">Page: {page}</p>
            {
              loading ? <p className="loading">Cargando...</p> : <Characters result={swAPI.results} />
            }
        </div>
    );
}

export default App;
