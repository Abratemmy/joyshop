import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Data({children}) {
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() =>{
        const fetchCart = async () =>{
            setLoading(true);
            const res = await axios.get('https://wp.joyagunbiade.com/wp-json/wp/v2/blogs');
            setCart(res.data);
            setLoading(false);
        }
        fetchCart()
    }, []);

  return <div>
       {cart.map((products, i)=>{
           return(
               <div>
                   
                </div>
           )
       })}
  </div>;
}

export default Data;
