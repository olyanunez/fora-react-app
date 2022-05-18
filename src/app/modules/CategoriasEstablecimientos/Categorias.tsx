import CategoriaList from "./CategoriaList"

export default function Categorias(){

    const categoriasEstablecimientos = [
        {
            id: 1,
            nombre: "Discoteca",
            descripcion: "Negocio de tematica nocturna."
        },
        {
            id: 2,
            nombre: "Drink",
            descripcion: "Negocio de matutina."
        },
        {
            id: 3,
            nombre: "Cafe",
            descripcion: "Negocio para disfrutar de bocadillos y bebidas hechas al gusto."
        },
        {
            id: 4,
            nombre: "Drink",
            descripcion: "Negocio de matutina."
        },
        {
            id: 5,
            nombre: "Cafe",
            descripcion: "Negocio para disfrutar de bocadillos y bebidas hechas al gusto."
        },
        {
            id: 6,
            nombre: "Drink",
            descripcion: "Negocio de matutina."
        },
        {
            id: 7,
            nombre: "Cafe",
            descripcion: "Negocio para disfrutar de bocadillos y bebidas hechas al gusto."
        },
    ]
    return(
        <>
            <CategoriaList categorias = {categoriasEstablecimientos}/>
        </>
    )
}