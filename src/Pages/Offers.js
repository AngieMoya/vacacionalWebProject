import React from "react";
import Header from "../Components/Header";
import OffersCard from '../Components/OffersResultCard';
import "../css/Offers.scss";

function Offers({ isLoggedIn }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <div className="search">
        <div className="searchBar">
          <p>Buscar oferta</p>
          <input type="search" placeholder="Busca ofertas aquí"></input>
        </div>
        <div className="filterInput">
          <select name="country">
            <option hidden selected>
              País
            </option>
            <option value="col">Colombia</option>
          </select>
          <select name="dpto">
            <option hidden selected>
              Departamento
            </option>
            <option value="Atlantico">Atlántico</option>
          </select>
          <select name="city">
            <option hidden selected>
              Ciudad o municipio
            </option>
            <option value="bq">Barranquilla</option>
          </select>
          <button>Crear nueva oferta</button>
        </div>
      </div>
      <section className="results">
        <div className="resultsBar"></div>
        < OffersCard/>
      </section>
    </>
  );
}
export default Offers;
