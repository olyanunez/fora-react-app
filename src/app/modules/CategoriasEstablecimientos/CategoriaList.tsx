import { Card, List } from "antd";
import CateforiasEstablecimientosDTO from "./CategoriasEstablecimientosDTO";

export default function CategoriaList(props: CategoriaItemDashboardProps){

    return(
        <>
            <List
                grid={{
                    gutter: 16,
                    xs: 3,
                    sm: 3,
                    md: 3,
                    lg: 4,
                    xl: 4,
                    xxl: 4,
                }}
                dataSource={props.categorias}
                renderItem={item => (
                    <List.Item>
                        <Card key={item.id} title={item.nombre}>{item.descripcion}</Card>
                    </List.Item>
                )}
            />
        </>
    )
}

interface CategoriaItemDashboardProps{
    categorias: CateforiasEstablecimientosDTO[]
}

