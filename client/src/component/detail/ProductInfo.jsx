import React from 'react';

export default function ProductInfo({detailImgs}) {
    return (
        <div className="tab_product_info">
            <ul>
                {
                    detailImgs&& detailImgs.map((img) =>
                        <li><img src={`http://localhost:9000/${img}`} alt="" /></li> 
                    )
                }
            </ul>
        </div>
    );
}

