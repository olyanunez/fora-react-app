export default interface EmpresaDTO{
    id: number;
    nombreEmpresa: string;
    titular: string;
    noDocumento: string;
    correoElectronico: string;
    tipoUsuario?: number;
    usuario: string;
    contrasena: string;
}

export interface EmpresaCrearModificarDTO{
    id?: number;
    nombreEmpresa: string;
    titular: string;
    noDocumento: string;
    correoElectronico: string;
    tipoUsuario?: number;
    usuario: string;
    contrasena: string;
}

export interface EmpresaLoginDTO{
    usuario: string;
    contrasena: string;
}