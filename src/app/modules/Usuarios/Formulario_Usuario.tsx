import { useEffect, useState } from 'react';
import { SendOutlined,CloseOutlined } from '@ant-design/icons';
import { Form, Input, Button, Col, Row, DatePicker, Select } from 'antd';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import { UsuarioCrearModificarDTO } from './UsuarioDTO';
import { urlRegistrarUsuarioPersona } from '../../../Components/Utils/endpoints';

export default function Formulario_Usuario(props: UsuarioFormProps){

    const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
    const onFormLayoutChange = ({ size }: { size: SizeType }) => {
        setComponentSize(size);
    };

    const campoRequerido = { required: true, message: 'Este campo es requerido!' };


    const onFinishFailed = (valores: any) => {
        console.log("Error:",valores);
    }

    const getFechaNacimiento = (fNacimiento: Date) => {
        const dia = fNacimiento.getDay;
        const mes = fNacimiento.getMonth;
        const anio = fNacimiento.getFullYear;

        return `${anio}/${mes}/${dia}`;
    }


    const  postUsuarioPersona = async (url: string, requestOptions: any) => {

        await fetch(url, requestOptions)
        .then((response) => {
            return response.json()
        })
        //Then with the data from the response in JSON...
        .then((data) => {
            console.log('Success:',data)
            console.log("StatusCode: ",data.respuesta.statusCode);
            console.log("Mensaje: ",data.respuesta.value);
        })
        //Then with the error genereted...
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    const submitPersona = (usuario: UsuarioCrearModificarDTO) =>{
        console.log("A registrar Usuario");
        console.log("Datos: ",usuario);
        console.log(urlRegistrarUsuarioPersona)
        const url = urlRegistrarUsuarioPersona;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(usuario)
        };
        postUsuarioPersona(url,requestOptions);
    }

    const [usuarioPersona, setUsuarioPersona] = useState(props.modelo);

    const cambiarEstado = (e: any) => {
        const { name, value } = e.target;
        setUsuarioPersona(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const cambiarEstadoFecha = (date: any,dateString: string) => {
        setUsuarioPersona(prevState => ({
            ...prevState,
            ['fNacimiento']: new Date(Date.parse(dateString))
        }));
    };


    useEffect(() => {
    });
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
                        onFinish={() => submitPersona(usuarioPersona)}
                        onFinishFailed={onFinishFailed}
                        // autoComplete="off"
                    >
                        <Form.Item label="Nombres" initialValue={props.modelo.nombre} rules={[campoRequerido]}>
                            <Input  name="nombre" onChange={cambiarEstado} />
                        </Form.Item>
                        <Form.Item label="Apellidos" initialValue={props.modelo.apellido} rules={[campoRequerido]}>
                            <Input  name="apellido" onChange={cambiarEstado}/>
                        </Form.Item>
                        <Form.Item label="Fecha de Nacimiento"  rules={[campoRequerido]}>
                            <DatePicker name="fNacimiento" onChange={cambiarEstadoFecha} />
                        </Form.Item>
                        <Form.Item name="genero" label="Genero"  rules={[{ required: true }]}>
                            <Select  placeholder="Seleccione un genero"// onChange={}
                            allowClear

                            // onChange={cambiarEstado}
                            >
                                <Select.Option value="03">No especificar</Select.Option>
                                <Select.Option value="01">Masculino</Select.Option>
                                <Select.Option value="02">Femenino</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="Usuario" initialValue={props.modelo.usuario} rules={[campoRequerido]}>
                            <Input name="usuario" onChange={cambiarEstado}/>
                        </Form.Item>
                        <Form.Item label="Contrasena" initialValue={props.modelo.contrasena} rules={[campoRequerido]}>
                            <Input name="contrasena" onChange={cambiarEstado}/>
                        </Form.Item>
                        <Form.Item label="Repetir Contrasena" initialValue={props.modelo.contrasena} rules={[campoRequerido]}>
                            <Input name="reContrasena" onChange={cambiarEstado}/>
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

interface UsuarioFormProps{
    modelo: UsuarioCrearModificarDTO
}