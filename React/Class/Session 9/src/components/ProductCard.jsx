import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Pagination } from 'react-bootstrap'

const ProductCard = () => {
    const [products, setProducts] = useState([])

    const [pageData, setPageData] = useState([])

    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);

    const handleNext = () => {
        if(page === pageCount) return page;
        setPage(page + 1)
    }

    const handlePrevious = () => {
        if(page === 1) return page;
        setPage(page - 1)
    }

    function getProductData() {
        axios.get('https://dummyjson.com/products').then(res => {
            setProducts(res.data.products)
            console.log(products);
        }).catch(err => console.log(err));
    }

    useEffect(() => {
        getProductData()
    }, [page])

    useEffect(() => {
        const pagedatacount = Math.ceil(products.length / 10);
        setPageCount(pagedatacount)

        if(page){
            const LIMIT = 10;
            const skip = LIMIT * page
            const dataskip = products.slice(page === 1 ? 0 : skip - LIMIT, skip)
            setPageData(dataskip)
        }
    }, [products])

    return (
        <>
            <div className='Container p-4'>
                <div className='grid grid-cols-4 gap-3'>
                    {
                        pageData && pageData.map((product, i) => {
                            return <div key={i} className='card flex items-center justify-center'>
                                <Link to={`/product/${product.id}`} className='no-underline text-center hover:text-primary hover:underline'>
                                    <img src={product.thumbnail} alt={product.title} />
                                    <h4 className='text-[#000]'>{product.title}</h4>
                                    <p className='text-[#000]'>{product.price}</p>
                                </Link>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <Pagination>
                    <Pagination.Prev onClick={handlePrevious} disabled={page === 1}/>
                    {
                        Array(pageCount).fill(null).map((ele, i) => {
                            return(
                                <div key={i}>
                                    <Pagination.Item active={page === i+1 ? true : false } onClick={() => setPage(i+1)}>{i + 1}</Pagination.Item>
                                </div>
                            )
                        })
                    }
                    <Pagination.Next onClick={handleNext} disabled={page === pageCount}/>
                </Pagination>
            </div>
        </>
    )
}

export default ProductCard