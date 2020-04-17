import React from 'react';
import './Products.css'

function Products () {
    return (
        <div className='products'>
            <h3>Products</h3>
            <h2>What We Provide</h2>
            <div className='row'>
                <div>
                    <span>
                        <ion-icon name="pencil-outline"></ion-icon>
                    </span>
                    <h4>Pencils</h4>
                    <p>Lead or Graphite</p>
                </div>
                <div>
                    <span>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </span>
                    <h4>Paper</h4>
                    <p>Made with <ion-icon name="heart"></ion-icon> from Bamboo</p>
                </div>
                <div>
                    <span>
                        <ion-icon name="cut-outline"></ion-icon>
                    </span>
                    <h4>Scissors</h4>
                    <p>Stainless Steel</p>
                </div>
                <div>
                    <span>
                        <ion-icon name="mail-outline"></ion-icon>
                    </span>
                    <h4>Envelopes</h4>
                    <p>All Sizes</p>
                </div>
            </div>
        </div>
    )
}

export default Products;