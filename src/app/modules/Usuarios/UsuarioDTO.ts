export default interface UsuarioDTO{
    id: number;
    nombre: string;
    apellido: string;
    fNacimiento: Date;
    tipoUsuario: number;
    usuario: string;
    contrasena: string;
}

export interface UsuarioCrearModificarDTO{
    id?: number;
    nombre: string;
    apellido: string;
    fNacimiento: Date;
    tipoUsuario?: number;
    usuario: string;
    contrasena: string;
}

export interface UsuarioLoginDTO{
    usuario: string;
    contrasena: string;
}