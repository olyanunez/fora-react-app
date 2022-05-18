import LockOutlined from '@ant-design/icons/lib/icons/LockOutlined';
import UserOutlined from '@ant-design/icons/lib/icons/UserOutlined';
import { Form, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import './css/Usuarios.css';
import { UsuarioLoginDTO } from './UsuarioDTO';

export default function Login() {

    const  loguear = async (usuario: UsuarioLoginDTO) => {
        // return  new Promise((resolve, reject) => {
        //     resolve(usuario)
        //     reject('error')
        // })
        // .then(respuesta =>{
        //     console.log('resuelto', respuesta);
        // })
        // .catch(error =>{
        //     console.log('rejected', error);
        // })

        // await fetch('https://example.com/profile', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(usuario),
        // })
        // .then((response) => {
        //     response.json()
        // })
        // //Then with the data from the response in JSON...
        // .then((data) => {
        //     console.log('Success:', data);
        // })
        // //Then with the error genereted...
        // .catch((error) => {
        //     console.error('Error:', error);
        // });
    };

    return (
        <>
            <div className="divContentLoginView">
                <br />
                <br />
                <br />
                <br />
                <div className="divLoginAppLogo">
                    <strong><h1 style={{color:'white'}}>Fora</h1></strong>
                </div>
                <br />
                <br />
                <div className="divContentFormLogin">
                    <h1>Login</h1>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={async (usuario) => {
                            await loguear(usuario);
                        }}
                    >
                        <Form.Item
                            name="usuario"
                            rules={[{ required: true, message: 'Usuario requerido!' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Usuario" />
                        </Form.Item>
                        <Form.Item
                            name="contrasena"
                            rules={[{ required: true, message: 'Contrasena requerida!' }]}
                        >
                            <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Contrasena"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Recuerdame</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="">
                                Olvide mi contrasena
                            </a>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                            LOGIN
                            </Button>
                            O <span><Link to="/LandingPage">Registrarme ahora!</Link></span>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </>
    );
};