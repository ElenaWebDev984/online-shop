import {useEffect, useState} from "react";
import axios from "axios";

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

    const products = [
        {
            _id: "664476983793ba7564c50ba2",
            id: 1,
            title: "Zip hoodie",
            price: 91.99,
            description: "Этот зип-худи, изготовленный из мягкого и уютного материала, предлагает идеальное сочетание стиля и комфорта для прохладной погоды. Его удобный крой с молнией спереди и капюшоном позволяет легко регулировать тепло, делая его идеальным выбором для повседневного ношения или для слоя одежды во время активных занятий на открытом воздухе.",
            category: "men's clothing",
            image: "https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/e12cebe8-7d13-4842-98ab-f71e0df6a2f4_8-zip-hoodie.png",
            rating: {
                rate: 4.7,
                count: 120
            },
            createdAt: "2024-05-15T08:47:20.180Z",
            updatedAt: "2024-05-15T12:20:34.117Z",
            __v: 0
        },
        {
            _id: "664476983793ba7564c50ba2",
            id: 2,
            title: "Zip hoodie2",
            price: 191.99,
            description: "Этот зип-худи, изготовленный из мягкого и уютного материала, предлагает идеальное сочетание стиля и комфорта для прохладной погоды. Его удобный крой с молнией спереди и капюшоном позволяет легко регулировать тепло, делая его идеальным выбором для повседневного ношения или для слоя одежды во время активных занятий на открытом воздухе.",
            category: "men's clothing",
            image: "https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/e12cebe8-7d13-4842-98ab-f71e0df6a2f4_8-zip-hoodie.png",
            rating: {
                rate: 4.7,
                count: 120
            },
            createdAt: "2024-05-15T08:47:20.180Z",
            updatedAt: "2024-05-15T12:20:34.117Z",
            __v: 0
        },
        {
            _id: "664476983793ba7564c50ba2",
            id: 3,
            title: "Zip hoodie3",
            price: 291.99,
            description: "Этот зип-худи, изготовленный из мягкого и уютного материала, предлагает идеальное сочетание стиля и комфорта для прохладной погоды. Его удобный крой с молнией спереди и капюшоном позволяет легко регулировать тепло, делая его идеальным выбором для повседневного ношения или для слоя одежды во время активных занятий на открытом воздухе.",
            category: "men's clothing",
            image: "https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/e12cebe8-7d13-4842-98ab-f71e0df6a2f4_8-zip-hoodie.png",
            rating: {
                rate: 4.7,
                count: 120
            },
            createdAt: "2024-05-15T08:47:20.180Z",
            updatedAt: "2024-05-15T12:20:34.117Z",
            __v: 0
        },
    ];

    return (
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
    );
};