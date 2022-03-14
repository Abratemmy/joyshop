import React from 'react';
import { ProductConsumer } from '../../Context';
import Allbook from "./Allbook"

function Allbooks() {
  return (
    <ProductConsumer>
        {function(value){
        const{bookdata, closeNavCart, addToCart} = value;

          return(
              <div className="products">
                  <h2>All Books</h2>
                  <div className="products-center">
                    {bookdata.map((data)=>{
                      return <Allbook  key={data.id} bookdata={data} closeNavCart={closeNavCart}
                      addToCart={()=>addToCart(data.id)} 
                      />
                    })}
                  </div>
              </div>
          )
      }}
    </ProductConsumer>
  )
}

export default Allbooks