import { UsuarioCrearModificarDTO } from "../Usuarios/UsuarioDTO";
import Formulario_Usuario from "../Usuarios/Formulario_Usuario";
import { Col, Row, Tabs } from 'antd';
import { StickyContainer, Sticky } from 'react-sticky';
import Formulario_Empresa from "../Empresa/Formulario_Empresa";
import { EmpresaCrearModificarDTO } from "../Empresa/EmpresaDTO";
import './css/LandingPage.css';
import { useEffect } from "react";

export default function LandingPage(){

    const usuarioPersona: UsuarioCrearModificarDTO = {
        id: 0,
        nombre: "",
        apellido: "",
        fNacimiento: new Date(),
        usuario:"",
        contrasena: ""
    };

    const usuarioEmpresa: EmpresaCrearModificarDTO = {
        id: 0,
        nombreEmpresa: "",
        titular: "",
        noDocumento: "",
        correoElectronico: "",
        tipoUsuario: 0,
        usuario:"",
        contrasena: ""
    };

    const { TabPane } = Tabs;

    const renderTabBar = (props:any, DefaultTabBar:any) => (
        <Sticky bottomOffset={80}>
          {({ style }) => (
            <DefaultTabBar {...props} className="site-custom-tab-bar" style={{ ...style }} />
          )}
        </Sticky>
    );

    useEffect(()=>{
    });

    return(
        <>
            <div style={{height:'100vh', paddingLeft:'5rem'}}>
                <Row>
                    <Col span="12">
                        <Row>
                            <h1>Reg&iacute;strate</h1>
                        </Row>
                        <Row>
                            <Col span="24" style={{paddingRight:'5rem'}}>
                                <StickyContainer>
                                    <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
                                        <TabPane tab="Persona" key="1">
                                            <Formulario_Usuario modelo = {usuarioPersona}/>
                                        </TabPane>
                                        <TabPane tab="Empresa" key="2">
                                            <Formulario_Empresa modelo = {usuarioEmpresa}/>
                                        </TabPane>
                                    </Tabs>
                                </StickyContainer>
                            </Col>
                        </Row>
                    </Col>
                    <Col span="12">
                        <div className="divContentInformationLandigPage"></div>
                    </Col>
                </Row>
            </div>
        </>
    )
}