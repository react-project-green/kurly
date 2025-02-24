import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import '../scss/detail.scss';
import axios from 'axios';
import ProductThumb from '../component/detail/ProductThumb.jsx';

export default function ProductListCategory() {
    const {categoryName} = useParams();
    const [productList, setProductList ]= useState([]);
     
    useEffect(() =>{
        axios.post('http://localhost:9000/main/category' , {category: categoryName})
                .then(res => {
                    console.log('res.jsx-->',res.data);
                    setProductList(res.data)}
                )
                .catch(err => console.log(err));
    },[categoryName]);
    
    return (
        <div className='product_list'>
            <div className="inner">
                {
                    productList.map((item) =>
                        <ProductThumb product={item} />
                    )
                }
            </div>     
        </div>
    );
}

