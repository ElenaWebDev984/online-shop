import {useEffect, useState} from "react";
import axios from "axios";

export type ProductType = {
    _id: string
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
        rate: number
        count: number
    }
    createdAt: string
    updatedAt: string
    __v: number
}

export const BestSellers = () => {

    const [products, setProducts] = useState<any>([])

    useEffect(() => {
        // обращение к серверу при загрузке страницы
        const promise = axios.get('https://masterclass.kimitsu.it-incubator.io/api/products')
        promise.then((res) => {
            const products = res.data;
            setProducts(products);
        })
    }, [])


    return (
        <div className={'bestSeller'}>
            <h2>Bestsellers</h2>
            <div className="cards">
                {products.map((product) => {
                    return (
                        <div className="card" key={product.id}>
                            <img src={product.image} alt="img" />
                            <h4>{product.title}</h4>
                            <p className="price">$ {product.price}</p>
                            <button>Show more</button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};