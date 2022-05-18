import React, { useState } from 'react';
import { SendOutlined,CloseOutlined } from '@ant-design/icons';
import { Form, Input, Button, Col, Row } from 'antd';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import { EmpresaCrearModificarDTO } from './EmpresaDTO';
import { urlRegistrarUsuarioEmpresa } from '../../../Components/Utils/endpoints';

export default function Formulario_Empresa(props:EmpresaFormProps){

    const campoRequerido = { required: true, message: 'Este campo es requerido!' };

    const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
    const onFormLayoutChange = ({ size }: { size: SizeType }) => {
        setComponentSize(size);
    };

    const  postUsuarioEmpresa = async (url: string, requestOptions: any) => {

        await fetch(url, requestOptions)
        .then((response) => {
            return response.json()
        })
        //Then with the data from the response in JSON...
        .then((data) => {
            console.log('Success:',data)
        })
        //Then with the error genereted...
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    const submitEmpresa = (usuario: EmpresaCrearModificarDTO) =>{

        console.log("A registrar Usuario Empresa");
        console.log("Datos: ",usuario);

        const url = urlRegistrarUsuarioEmpresa;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(usuario)
        };
        postUsuarioEmpresa(url,requestOptions);

    }

    const onFinishFailed = (valores: any) => {
        console.log("Error:",valores);
    }

    const [usuarioEmpresa,setUsuarioEmpresa] = useState(props.modelo);

    const cambiarEstado = (e: any) => {
        const { name, value } = e.target;
        setUsuarioEmpresa(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return(
        <>
            <Row>
                <Col span={24}>
                    <Form
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 14 }}
                        layout="horizontal"
                        initialValues={{ size: componentSize }}
                        onValuesChange={onFormLayoutChange}
                        size={componentSize as SizeType}
                        onFinish={() => submitEmpresa(usuarioEmpresa)}
                        onFinishFailed={onFinishFailed}
                        // autoComplete="off"
                    >
                        <Form.Item label="Empresa" name="nombreEmpresa" initialValue={props.modelo.nombreEmpresa} rules={[campoRequerido]}>
                            <Input onChange={cambiarEstado}/>
                        </Form.Item>
                        <Form.Item label="Titular" name="titular" initialValue={props.modelo.titular} rules={[campoRequerido]}>
                            <Input onChange={cambiarEstado}/>
                        </Form.Item>
                        <Form.Item label="No. Documento" name="noDocumento" initialValue={props.modelo.noDocumento} rules={[campoRequerido]}>
                            <Input onChange={cambiarEstado}/>
                        </Form.Item>
                        <Form.Item label="Email" name="correoElectronico" initialValue={props.modelo.correoElectronico} rules={[campoRequerido]}>
                            <Input onChange={cambiarEstado}/>
                        </Form.Item>
                        <Form.Item label="Usuario" name="usuario" initialValue={props.modelo.usuario} rules={[campoRequerido]}>
                            <Input onChange={cambiarEstado}/>
                        </Form.Item>
                        <Form.Item label="Contrasena" name="contrasena" initialValue={props.modelo.contrasena} rules={[campoRequerido]}>
                            <Input onChange={cambiarEstado}/>
                        </Form.Item>
                        <Form.Item label="Repetir Contrasena" name="reContrasena" initialValue={props.modelo.contrasena} rules={[campoRequerido]}>
                            <Input onChange={cambiarEstado}/>
                        </Form.Item>
                        <Row>
                            <Col span={22} style={{ textAlign: 'right' }}>
                                <Button type="primary" htmlType="submit" icon={<SendOutlined />}>Reg&iacute;strate</Button>
                                <Button type="default" icon={<CloseOutlined />}>Cancelar</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </>
    )
}

interface EmpresaFormProps{
    modelo: EmpresaCrearModificarDTO
}