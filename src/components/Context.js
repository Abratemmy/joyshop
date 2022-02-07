import React, { Component } from 'react';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    constructor(props) {
        super(props)
    
        this.state={
            data: [],
            navOpen: false,
            cartOpen: false,
            cart: [],
            total:0,
            shipping:10,
            isInCart: true,
        }
    }
   

    componentDidMount(){
        return fetch(`https://wp.joyagunbiade.com/wp-json/wp/v2/shops`)
        .then((response) =>response.json())
        .then((responseJson) =>{
            this.setState({
                // cart: responseJson,
                data: responseJson
            });
        })
        .catch((error)=>{
            console.log(error)
        })
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
        const{data} = this.state;

        let check=this.state.cart.find(item=>item.id===id);

        if(!check){
            const filterData=data.filter(item=>{
                return item.id===id;
                
            })

            // for each in order to chane the situation of cart

            filterData.forEach((item)=>{
               if(item.id===id){
                   this.setState({
                    //    isInCart:true
                   })
               }
            })

            this.setState({
                cart:[...this.state.cart, ...filterData],
                cartOpen:true,
            })
        }else{
            alert("item already in cart")
        }       
    }

    // delete single item
    deleteItem=(id)=>{
        const {cart} = this.state;
        cart.forEach((item, index)=>{
            if(item.id===id){
                cart.splice(index, 1)
            }
            item.isInCart=false
        })
        this.setState({
            cart:cart
        })
    }

    // increase item
    increaseItem=(id)=>{
        const {cart} = this.state;
        cart.forEach(item=>{
            if(item.id===id){
              item.acf.count += 1
            }
        })
        this.setState({
            cart:cart
        })
    }

    // deccrease item
    decreaseItem=(id)=>{
        const {cart}=this.state;
        cart.forEach(item=>{
            if(item.id===id){
                item.acf.count===1?item.acf.count=1:item.acf.count -=1;
            }
            this.setState({
                cart:cart
            }
            )
        })
    }

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

