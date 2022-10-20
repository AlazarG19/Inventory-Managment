import React from 'react'
import logo from '../assets/apple.png';
import '../style/productsection.css';
const ProductSection = () => {
    return (
        <div className="productsection col-6">
            <div className='row' >
                <div className='col-6' >Item Name : Apple</div>
                <div className='col-6' >Item Type : Food</div>
            </div>
            <div className='row' >
                <div className='col-6' >Id : 2</div>
                <div className='col-6' >Imported Day : 20/20/20</div>
            </div>
            <div className='row' >
                <div className='col-6' >Items Left In Inventory : 10</div>
            </div>
            <div className='row' >
                <div className='col-6' >Items Left On Shelf : 6</div>
            </div>
            <div className='row' >
                <div className='col-12' >
                    <img className='col-12' src={logo} alt="Logo" />;
                </div>
            </div>
            <div className='row' >
                <div className='col-6' >Item Bought at : 7$</div>
                <div className='col-6' >Retail Price : 7$</div>
            </div>
            <div className='row' >
                <div className='col-6' >Sold Items Quantity : 10</div>
                <div className='col-6' >Profit Per Item : 10$</div>
            </div>
            <div className='row' >
                <div className='col-6' >Sold Items Quantity : 10</div>
            </div>

        </div>
    )
}

export default ProductSection