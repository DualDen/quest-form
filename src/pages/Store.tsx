import React from 'react';
import {useGetStoreQuery} from "../api/StoreApi";
import {Card} from "antd";
import {ProductCards} from "../components/ProductCards";

export const Store = () => {
    const {data: store} = useGetStoreQuery("");
    console.log(store);
    return (
        <div className="container">
        <div className="store">
            {store?.map(prod => <ProductCards key={prod?.id} price={prod.id} title={prod.title} url={prod.url}/>)}
        </div>
        </div>
    );
};

