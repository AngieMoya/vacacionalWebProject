//import React, { useEffect } from 'react';
import React from "react";
import Header from "../Components/Header";
import "../css/CreateOffers.scss";

function CreateOffers({ isLoggedIn }) {
  /*useEffect(() => {
        if (!localStorage.getItem('token')) {
            window.location.href = '/';
        } else {
            if (JSON.parse(localStorage.getItem('token')).type !== 'recruiter') {
                window.location.href = '/';
            }
        }
    });*/

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <div className="cont-form">
        <form>
          <section className="offersInfo">
            <h2>Información de la oferta</h2>
            <div>
              <input type="text" placeholder="Nombre de la vacante"></input>
              <select name="country">
                <option hidden selected>
                  Selecciona el país
                </option>
                <option value="col">Colombia</option>
              </select>
            </div>
            <div>
              <textarea
                name="description"
                rows="10"
                cols="44"
                placeholder="Descripción corta"
              ></textarea>
              <select name="dp">
                <option hidden selected>
                  Selecciona el Departamento
                </option>
                <option value="atlantico">Atlántico</option>
              </select>
            </div>
            <div>
              <select name="country">
                <option hidden selected>
                  Selecciona la ciudad y/o Municipio
                </option>
                <option value="baq">Barranquilla</option>
              </select>
            </div>
          </section>
          <section className="offersDetails">
            <h2>Detalles</h2>
            <div className="detailsField">
                <div>
                  <input
                    className="detailsInput"
                    type="number"
                    placeholder="Salario"
                  ></input>
                  <input
                    className="detailsInput"
                    type="text"
                    placeholder="Horario"
                  ></input>
                  <select name="type-contract">
                    <option hidden selected>
                      Tipo de contrato
                    </option>
                    <option value="indef">Indefinido</option>
                    <option value="fijo">Termino fijo</option>
                  </select>
                </div>
                <div>
                  <input type="text" placeholder="Posición"></input>
                  <select name="mode">
                    <option hidden selected>
                      Modalidad
                    </option>
                    <option value="remote">Remoto</option>
                    <option value="present">Presencial</option>
                  </select>
                  <select name="priority">
                    <option hidden selected>
                      Prioridad
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
              </div>
          </section>
          <div className="buttons">
            <button className="createButton" type="submit">
              Crear
            </button>
            <div className="cancelButton">Cancelar</div>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateOffers;
