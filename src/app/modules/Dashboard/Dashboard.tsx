import rutas from "../../../route.config";
import Atajos from "./Atajos";

export default function Dashboard(){
    const atajos = rutas.filter(ruta => ruta.tipo === 3);

    return(
        <>
            <Atajos atajos={atajos}/>
        </>
    )
}