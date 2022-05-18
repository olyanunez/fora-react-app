import { Menu } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';

const { SubMenu } = Menu;

export default function MenuApp(props: MenuAppProps) {

    const [current, setCurrent] = useState("establecimientos");

    let handlerClick = (e:any) => {
        console.log("Click en: " + e.key);
        setCurrent(e.key);
    }

    const rutas = props.rutas

    const mapearItems = (ruta: any) =>{

        let rutasHijas = rutas.filter(rutasHija => rutasHija.tipo === 2 && rutasHija.path.split("/")[1] === ruta.path.split("/")[1]);

        if(rutasHijas.length === 0){
            return <Menu.Item key={ruta.name+ruta.tipo} eventKey={ruta.path} icon="">
                        <Link to={ruta.path}>{ruta.name}</Link>
                    </Menu.Item>
        }else if(rutasHijas.length > 0){
            return <SubMenu key={ruta.name+ruta.tipo} icon="" title={ruta.name}>
                <Menu.ItemGroup>
                    {rutasHijas.map(ruta => (
                        <Menu.Item key={ruta.name+ruta.tipo} eventKey={ruta.path}>
                            <Link to={ruta.path}>{ruta.name}</Link>
                        </Menu.Item>
                    ))}
                </Menu.ItemGroup>
            </SubMenu>
        }
    }

    return (
        <>
            <Menu theme="dark" onClick={handlerClick} selectedKeys={[current]} mode="horizontal">
                {rutas.filter(ruta => ruta.tipo === 1).map(ruta => (
                        mapearItems(ruta)
                ))}

                {/* <>
                    <Menu.Item eventKey="alipay">
                    </Menu.Item>
                </> */}
            </Menu>
        </>
    );
}

interface MenuAppProps{
    rutas: any[];
}