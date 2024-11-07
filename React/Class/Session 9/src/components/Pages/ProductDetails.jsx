import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    const getProductData = () => {
        axios.get(`https://dummyjson.com/products/${id}`).then(res => {
            setProduct(res.data);
            console.log(res.data);
        }).catch(err => console.log(err));
    }
    useEffect(() => {
        getProductData()
    }, [])

    console.log(product);

    return (
        <>
            <div className="container flex items-center justify-center py-[50px]">
                <div className="right">
                    <img src={product.thumbnail} alt="" />
                </div>
                <div className="left">
                    <h1 className='text-[32px]'>{product.title}</h1>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    <p>{product.category}</p>
                </div>
            </div>
        </>
    )
}

export default ProductDetails