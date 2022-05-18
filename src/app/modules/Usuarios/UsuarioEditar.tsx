import { UsuarioCrearModificarDTO } from "./UsuarioDTO";
import Formulario_Usuario from "./Formulario_Usuario";

export default function UsuarioEditar(){

    const usuarioVacio: UsuarioCrearModificarDTO = {
        id: 1,
        nombre: "Maxima",
        apellido: "Cristo",
        fNacimiento: new Date(),
        usuario:"mcristo",
        contrasena: "123456"
    }

    const submit = (usuario: UsuarioCrearModificarDTO) =>{
        console.log("A guardar");

        console.log("Success",usuario);

    }

    return(
        <>
            <div style={{height:'1500px'}}>

                <div style={{width:'20%', padding:'6px'}}>
                    <h1>Editar</h1>
                    <Formulario_Usuario  modelo = {usuarioVacio} />
                </div>
            </div>
        </>
    )
}