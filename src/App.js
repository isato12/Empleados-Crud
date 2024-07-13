import { useState } from 'react';
import { v4 as uuid } from "uuid"
import './App.css';
import Header from "./componentes/Header/Header"
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/isato12.png",
    nombre: "Isai Torres",
    puesto: "Manager",
    fav: true
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: false
  }])

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ])


  //Ternario --> condicion ? seMuestra : noSeMuestra
  // condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])
  }

  const like = (id) => {
    console.log("like", id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })

    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header />
      {/* {mostrarFormulario ? <Formulario /> : <></>} */}
      {
        mostrarFormulario && <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      }

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {
        equipos.map((equipo) => <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />
        )
      }

      <Footer />


    </div>
  );
}

export default App;





// //codigo con local storage generado por ia
// import { useState, useEffect } from 'react';
// import { v4 as uuid } from "uuid";
// import './App.css';
// import Header from "./componentes/Header/Header";
// import Formulario from './componentes/Formulario/Formulario';
// import MiOrg from './componentes/MiOrg';
// import Equipo from './componentes/Equipo';
// import Footer from './componentes/Footer';

// function App() {
//   const [mostrarFormulario, actualizarMostrar] = useState(false);

//   // Recuperar colaboradores de localStorage o usar valores por defecto
//   const initialColaboradores = JSON.parse(localStorage.getItem('colaboradores')) || [{
//     id: uuid(),
//     equipo: "Front End",
//     foto: "https://github.com/harlandlohora.png",
//     nombre: "Harland Lohora",
//     puesto: "Instructor",
//     fav: false
//   },
//   {
//     id: uuid(),
//     equipo: "Programación",
//     foto: "https://github.com/isato12.png",
//     nombre: "Isai Torres",
//     puesto: "Manager",
//     fav: true
//   },
//   {
//     id: uuid(),
//     equipo: "UX y Diseño",
//     foto: "https://github.com/JeanmarieAluraLatam.png",
//     nombre: "Jeanmarie Quijada",
//     puesto: "Instructora en Alura Latam",
//     fav: false
//   },
//   {
//     id: uuid(),
//     equipo: "Programación",
//     foto: "https://github.com/christianpva.png",
//     nombre: "Christian Velasco",
//     puesto: "Head de Alura e Instructor",
//     fav: false
//   },
//   {
//     id: uuid(),
//     equipo: "Innovación y Gestión",
//     foto: "https://github.com/JoseDarioGonzalezCha.png",
//     nombre: "Jose Gonzalez",
//     puesto: "Dev FullStack",
//     fav: false
//   }];

//   const [colaboradores, actualizarColaboradores] = useState(initialColaboradores);

//   // Guardar colaboradores en localStorage cuando se actualicen
//   useEffect(() => {
//     localStorage.setItem('colaboradores', JSON.stringify(colaboradores));
//   }, [colaboradores]);

//   // Recuperar equipos de localStorage o usar valores por defecto
//   const initialEquipos = JSON.parse(localStorage.getItem('equipos')) || [
//     {
//       id: uuid(),
//       titulo: "Programación",
//       colorPrimario: "#57C278",
//       colorSecundario: "#D9F7E9"
//     },
//     {
//       id: uuid(),
//       titulo: "Front End",
//       colorPrimario: "#82CFFA",
//       colorSecundario: "#E8F8FF"
//     },
//     {
//       id: uuid(),
//       titulo: "Data Science",
//       colorPrimario: "#A6D157",
//       colorSecundario: "#F0F8E2"
//     },
//     {
//       id: uuid(),
//       titulo: "Devops",
//       colorPrimario: "#E06B69",
//       colorSecundario: "#FDE7E8"
//     },
//     {
//       id: uuid(),
//       titulo: "UX y Diseño",
//       colorPrimario: "#DB6EBF",
//       colorSecundario: "#FAE9F5"
//     },
//     {
//       id: uuid(),
//       titulo: "Móvil",
//       colorPrimario: "#FFBA05",
//       colorSecundario: "#FFF5D9"
//     },
//     {
//       id: uuid(),
//       titulo: "Innovación y Gestión",
//       colorPrimario: "#FF8A29",
//       colorSecundario: "#FFEEDF"
//     }
//   ];

//   const [equipos, actualizarEquipos] = useState(initialEquipos);

//   // Guardar equipos en localStorage cuando se actualicen
//   useEffect(() => {
//     localStorage.setItem('equipos', JSON.stringify(equipos));
//   }, [equipos]);

//   const cambiarMostrar = () => {
//     actualizarMostrar(!mostrarFormulario);
//   };

//   const registrarColaborador = (colaborador) => {
//     actualizarColaboradores([...colaboradores, colaborador]);
//   };

//   const eliminarColaborador = (id) => {
//     const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
//     actualizarColaboradores(nuevosColaboradores);
//   };

//   const actualizarColor = (color, id) => {
//     const equiposActualizados = equipos.map((equipo) => {
//       if (equipo.id === id) {
//         equipo.colorPrimario = color;
//       }
//       return equipo;
//     });
//     actualizarEquipos(equiposActualizados);
//   };

//   const crearEquipo = (nuevoEquipo) => {
//     actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }]);
//   };

//   const like = (id) => {
//     const colaboradoresActualizados = colaboradores.map((colaborador) => {
//       if (colaborador.id === id) {
//         colaborador.fav = !colaborador.fav;
//       }
//       return colaborador;
//     });
//     actualizarColaboradores(colaboradoresActualizados);
//   };

//   return (
//     <div>
//       <Header />
//       {mostrarFormulario && <Formulario equipos={equipos.map((equipo) => equipo.titulo)} />}
//       <MiOrg cambiarMostrar={cambiarMostrar} />
//       {equipos.map((equipo) => (
//         <Equipo
//           key={equipo.id}
//           datos={equipo}
//           colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
//           eliminarColaborador={eliminarColaborador}
//           actualizarColor={actualizarColor}
//           like={like}
//         />
//       ))}
//       <Footer />
//     </div>
//   );
// }
// export default App;





// tercer intento de codigo generado por ia

// import { useState, useEffect } from 'react';
// import { v4 as uuid } from "uuid";
// import './App.css';
// import Header from "./componentes/Header/Header";
// import Formulario from './componentes/Formulario/Formulario';
// import MiOrg from './componentes/MiOrg';
// import Equipo from './componentes/Equipo';
// import Footer from './componentes/Footer';

// function App() {
//   const [mostrarFormulario, actualizarMostrar] = useState(false);

//   // Recuperar colaboradores de localStorage o usar valores por defecto
//   const initialColaboradores = JSON.parse(localStorage.getItem('colaboradores')) || [{
//     id: uuid(),
//     equipo: "Front End",
//     foto: "https://github.com/harlandlohora.png",
//     nombre: "Harland Lohora",
//     puesto: "Instructor",
//     fav: false
//   },
//   {
//     id: uuid(),
//     equipo: "Programación",
//     foto: "https://github.com/isato12.png",
//     nombre: "Isai Torres",
//     puesto: "Manager",
//     fav: true
//   },
//   {
//     id: uuid(),
//     equipo: "UX y Diseño",
//     foto: "https://github.com/JeanmarieAluraLatam.png",
//     nombre: "Jeanmarie Quijada",
//     puesto: "Instructora en Alura Latam",
//     fav: false
//   },
//   {
//     id: uuid(),
//     equipo: "Programación",
//     foto: "https://github.com/christianpva.png",
//     nombre: "Christian Velasco",
//     puesto: "Head de Alura e Instructor",
//     fav: false
//   },
//   {
//     id: uuid(),
//     equipo: "Innovación y Gestión",
//     foto: "https://github.com/JoseDarioGonzalezCha.png",
//     nombre: "Jose Gonzalez",
//     puesto: "Dev FullStack",
//     fav: false
//   }];

//   const [colaboradores, actualizarColaboradores] = useState(initialColaboradores);

//   // Guardar colaboradores en localStorage cuando se actualicen
//   useEffect(() => {
//     localStorage.setItem('colaboradores', JSON.stringify(colaboradores));
//   }, [colaboradores]);

//   // Recuperar equipos de localStorage o usar valores por defecto
//   const initialEquipos = JSON.parse(localStorage.getItem('equipos')) || [
//     {
//       id: uuid(),
//       titulo: "Programación",
//       colorPrimario: "#57C278",
//       colorSecundario: "#D9F7E9"
//     },
//     {
//       id: uuid(),
//       titulo: "Front End",
//       colorPrimario: "#82CFFA",
//       colorSecundario: "#E8F8FF"
//     },
//     {
//       id: uuid(),
//       titulo: "Data Science",
//       colorPrimario: "#A6D157",
//       colorSecundario: "#F0F8E2"
//     },
//     {
//       id: uuid(),
//       titulo: "Devops",
//       colorPrimario: "#E06B69",
//       colorSecundario: "#FDE7E8"
//     },
//     {
//       id: uuid(),
//       titulo: "UX y Diseño",
//       colorPrimario: "#DB6EBF",
//       colorSecundario: "#FAE9F5"
//     },
//     {
//       id: uuid(),
//       titulo: "Móvil",
//       colorPrimario: "#FFBA05",
//       colorSecundario: "#FFF5D9"
//     },
//     {
//       id: uuid(),
//       titulo: "Innovación y Gestión",
//       colorPrimario: "#FF8A29",
//       colorSecundario: "#FFEEDF"
//     }
//   ];

//   const [equipos, actualizarEquipos] = useState(initialEquipos);

//   // Guardar equipos en localStorage cuando se actualicen
//   useEffect(() => {
//     localStorage.setItem('equipos', JSON.stringify(equipos));
//   }, [equipos]);

//   const cambiarMostrar = () => {
//     actualizarMostrar(!mostrarFormulario);
//   };

//   const registrarColaborador = (colaborador) => {
//     const nuevosColaboradores = [...colaboradores, colaborador];
//     actualizarColaboradores(nuevosColaboradores);
//     localStorage.setItem('colaboradores', JSON.stringify(nuevosColaboradores));
//   };

//   const eliminarColaborador = (id) => {
//     const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
//     actualizarColaboradores(nuevosColaboradores);
//     localStorage.setItem('colaboradores', JSON.stringify(nuevosColaboradores));
//   };

//   const actualizarColor = (color, id) => {
//     const equiposActualizados = equipos.map((equipo) => {
//       if (equipo.id === id) {
//         equipo.colorPrimario = color;
//       }
//       return equipo;
//     });
//     actualizarEquipos(equiposActualizados);
//     localStorage.setItem('equipos', JSON.stringify(equiposActualizados));
//   };

//   const crearEquipo = (nuevoEquipo) => {
//     const nuevosEquipos = [...equipos, { ...nuevoEquipo, id: uuid() }];
//     actualizarEquipos(nuevosEquipos);
//     localStorage.setItem('equipos', JSON.stringify(nuevosEquipos));
//   };

//   const like = (id) => {
//     const colaboradoresActualizados = colaboradores.map((colaborador) => {
//       if (colaborador.id === id) {
//         colaborador.fav = !colaborador.fav;
//       }
//       return colaborador;
//     });
//     actualizarColaboradores(colaboradoresActualizados);
//     localStorage.setItem('colaboradores', JSON.stringify(colaboradoresActualizados));
//   };

//   return (
//     <div>
//       <Header />
//       {mostrarFormulario && <Formulario equipos={equipos.map((equipo) => equipo.titulo)}
//           regisdtrarColaborador={registrarColaborador}
//           crearEquipo={crearEquipo} />}
//       <MiOrg cambiarMostrar={cambiarMostrar} />
//       {equipos.map((equipo) => (
//         <Equipo
//           key={equipo.id}
//           datos={equipo}
//           colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
//           eliminarColaborador={eliminarColaborador}
//           actualizarColor={actualizarColor}
//           like={like}
//         />
//       ))}
//       <Footer />
//     </div>
//   );
// }

// export default App;