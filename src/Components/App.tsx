import React, { useState, useEffect } from "react";
import IUsuarios from "../Interface/IUsuarios";
import Cabezera from "./Cabezera";
import Fila from "./Fila";

//Componente principal de la app
function App() {
  // Definimos un estado llamado "usuarios" utilizando useState,
  // inicializado como un array vacío de objetos que cumplen con la interfaz IUsuarios.
  const [usuarios, setUsuarios] = useState<IUsuarios[]>([]);

  // useEffect se utiliza para ejecutar efectos secundarios en el componente.
  // En este caso, queremos realizar una solicitud HTTP para obtener los usuarios
  // cuando el componente se monta por primera vez.
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((datos) => setUsuarios(datos))
      .catch((err) => console.error(err)); // En caso de error, lo mostramos en la consola.
  }, []);

  // Función "borrar" que elimina un usuario del estado "usuarios" según su id.
  const borrar = (id: number) => {
    setUsuarios(usuarios.filter(p => p.id !== id));
  };

  return (
    <main>
      <section className="container">
        <Cabezera total={usuarios.length} />
        {usuarios.map((usuario, index) => {
          return <Fila data={usuario} key={index} borrar={borrar} />;
        })}
      </section>
    </main>
  );
}
export default App;
