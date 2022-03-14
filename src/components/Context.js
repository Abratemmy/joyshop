import React, { Component } from 'react';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    constructor(props) {
        super(props)
    
        this.state={
            bookdata:[],
            data: [],
            navOpen: false,
            cartOpen: false,
            cart: [],
            total:0,
            shipping:10,
        }
    }
   
   
    componentDidMount(){
        Promise.all([
        fetch(`https://wp.joyagunbiade.com/wp-json/wp/v2/bookshops`).then((response) => response.json()),
        fetch(`https://wp.joyagunbiade.com/wp-json/wp/v2/shops`).then((response) => response.json())
        ]).then(([bookdata, data]) =>{
            this.setState({
                bookdata:bookdata,
                data: data
            })

            this.totalItems();
        })
        .catch((error)=>{
            console.log(error)
        })
            
            // local storage
            // const dataCart = JSON.parse(localStorage.getItem('dataCart'));
            // if(dataCart!==null){
            //     this.setState({
            //         cart:dataCart
            //     })
            // }
            // const totalCart = JSON.parse(localStorage.getItem('totalCart'));
            // if(totalCart!==null){
            //     this.setState({
            //         total: totalCart
            //     })
            // }
            
       
    }
   
    // for open close
    handleNav=()=>{
        if(this.state.cartOpen===true){
            this.setState({
                cartOpen: false
            })
        }
        this.setState({
            navOpen:!this.state.navOpen
        })
    }

  
    // for open close cart
    handleCartNav=()=>{
        if(this.state.navOpen===true){
            this.setState({
                navOpen:false
            })
        }
        this.setState({
            cartOpen:!this.state.cartOpen
        })
    }

    // if cart is open we want to be closed
    closeNavCart=()=>{
        if(this.state.navOpen===true || this.state.cartOpen===true){
            this.setState({
                navOpen:false,
                cartOpen: false
            })
        }
    }

    // add to cart functionality
    addToCart=(id)=>{
        console.log(`item ${id} added to cart`);     
        const {data,cart}=this.state;
        
        let check=this.state.cart.find(item=>item.id===id);
        
        if(!check){
            const filterData=data.filter(item=>{
                return item.id===id
            })
        
            //  for each in order to change the situation of cart items
            filterData.forEach(item=>{
                item.acf.isincart=true
            
            })
          
            this.setState({
                cart:[...this.state.cart, ...filterData],
                cartOpen:true,
             },()=>{
                 this.totalItems(); 
             })
        }
        
        else{
            alert(`item already in cart`)
        }
        
        
    }

    // delete single item
    deleteItem=(id)=>{
        const {cart} = this.state;
        cart.forEach((item, index)=>{
            if(item.id===id){
                cart.splice(index, 1)
            }
            item.acf.isincart=false
        })
        this.setState({
            cart:cart
        }, ()=>{
            this.totalItems()
        })
    }
  
    // increase item
    increaseItem=(id)=>{
        const {cart} = this.state;
        cart.forEach(item=>{
            if(item.id===id){
                item.acf.count = parseInt(item.acf.count) + 1    
            }
        })
        this.setState({
            cart:cart
        },()=>{
            this.totalItems(); 
        })
    }

    // deccrease item
    decreaseItem=(id)=>{
        const {cart}=this.state;
        cart.forEach(item=>{
            if(item.id===id){
                item.acf.count=parseInt(item.acf.count)===1?item.acf.count=1:item.acf.count -=1;
            }
            this.setState({
                cart:cart
            }, ()=>{
                this.totalItems(); 
            })
        })
    }

    // get total items
    totalItems=()=>{
        const {cart} = this.state;

        const cartTotal = cart.reduce((prev, item)=>{
            return prev + (item.acf.price * item.acf.count)
        }, 0)
        
        this.setState({
            total:cartTotal
        })
    }

    // componentDidUpdate(){
    //     localStorage.setItem('dataCart', JSON.stringify(this.state.cart));
    //     localStorage.setItem('totalCart', JSON.stringify(this.state.total));
    // }
    
  render() {
    return (
        <ProductContext.Provider value={{
            ...this.state,
            handleNav: this.handleNav,
            closeNavCart: this.closeNavCart,
            handleCartNav: this.handleCartNav,
            addToCart: this.addToCart,
            deleteItem: this.deleteItem,
            increaseItem:this.increaseItem,
            decreaseItem:this.decreaseItem

        }}>
            {this.props.children}
        </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer

export {ProductProvider, ProductConsumer};

