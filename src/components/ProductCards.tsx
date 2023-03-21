import React from 'react';
import {Button, Card} from "antd";


interface IProdCardProps {
    price: number,
    title: string,
    url: string,
}

export const ProductCards = ({price,title,url}:IProdCardProps) => {
    return (
        <div className="card-container">
        <Card hoverable={true} title={title}>
            <div>
                <img style={{width: "100%"}} src={url} alt="Image"/>
            </div>
            <div>
                Price: {price}
            </div>
            <Button>Add to cart</Button>
        </Card>
        </div>
    );
};
