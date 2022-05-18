import { Card, List } from "antd";

export default function Atajos(props: AtajosItemDashboardProps){

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
                dataSource={props.atajos}
                renderItem={item => (
                    <List.Item>
                        <Card key={item.path} title={item.name}></Card>
                    </List.Item>
                )}
            />
        </>
    )
}

interface AtajosItemDashboardProps{
    atajos:AtajosDTO[]
}

interface AtajosDTO{
    name: string;
    path: string
}