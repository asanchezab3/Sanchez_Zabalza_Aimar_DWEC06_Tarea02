import React from "react";
import IUsuarios from "../Interface/IUsuarios";

//Muestra cada article
function Fila({ data, key, borrar }: { data: IUsuarios; key: number; borrar: (id:number) => void }) {
    return (
      <article className="person" key={key}>
        <img src={`https://randomuser.me/api/portraits/men/${data.id}.jpg`} alt={data.name} />
        <div>
          <h4>{data.name}</h4>
          <p>{data.email}</p>
          <p>{data.phone}</p>
        </div>
        <button type="button" className="delete-btn"  onClick={() => borrar(data.id)}>
          <img src="./src/trash.png" alt="" />
        </button>
      </article>
    );
  }
  
  export default Fila;
