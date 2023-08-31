import logo from './logo.svg';
import './App.css';
import Pelicula from "./pelicula";
import PageWrapper from "./pageWrapper";
import peliculasJson from "./peliculas.json";
import Paginacion from "./paginacion";
import {useState,useEffect} from "react";
function ListaPeliculas() {
    const [paginaActual,setPaginaActual]=useState(1);
    const [peliculas,setPeliculas]=useState([]);
    const [peliculasDos,setPeliculasDos]=useState([]);
    let peliculass=peliculasJson;
    
    const TOTAL_POR_PAGINA = 4;
    useEffect(()=>{
        // si quieres consumir la api, descomenta este codigo
        //buscarPelicula();

    },[]);


    const buscarPelicula=async ()=>{
        let url='https://cors-anywhere.herokuapp.com/https://lucasmoy.dev/data/react/peliculas.json';
        
        let respuesta = await fetch(url,{
            "method":'GET',
            "headers":{
                "Accept":'application/json',
                "Content-Type":'application/json',
                "Origin":'https://lucasmoy.dev'
            }
        });
        let json= await respuesta.json();
        setPeliculas(json)
    }

    const getTotalPaginas = ()=>{
        let cantidadPeliculas = peliculasJson.length;
        return Math.ceil(cantidadPeliculas/TOTAL_POR_PAGINA);
    }

    const cargarPeliculas = ()=>{
        peliculass = peliculass.slice((paginaActual-1)*TOTAL_POR_PAGINA,paginaActual*TOTAL_POR_PAGINA);
    }

    cargarPeliculas();

    return (
        <>
            <PageWrapper>
                {peliculass.map(pelicula=>{
                        return <Pelicula titulo={pelicula.titulo} calificacion={pelicula.calificacion} director={pelicula.director} actores={pelicula.actores} fecha={pelicula.fecha} duracion={pelicula.duracion} img={pelicula.img}>
                            {pelicula.descripcion}
                        </Pelicula>
                    }
                )}
                <Paginacion pagina={paginaActual} total={getTotalPaginas()} onChange={(pagina)=>{
                    setPaginaActual(pagina);
                }} />
            </PageWrapper>

        </>
    );
}

export default ListaPeliculas;