import React, { Component } from 'react';
import { ProductConsumer } from '../Context';
import "./Home1.css";
import Slider from "react-slick";
import { NavLink } from 'react-router-dom';
import {MdNavigateNext} from "react-icons/md";
import {GrFormPrevious} from "react-icons/gr"
import HomeCloth from './HomeCloth';

export class MainHome1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            bookdata:[],
            clothdata:[]
        }

        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);

        this.clothnext = this.clothnext.bind(this);
        this.clothprevious = this.clothprevious.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    clothnext() {
        this.slider.slickNext();
    }
    clothprevious() {
        this.slider.slickPrev();
    }
    componentDidMount(){
        Promise.all([
        fetch(`https://wp.joyagunbiade.com/wp-json/wp/v2/bookshops`).then((response) => response.json()),
        fetch(`https://wp.joyagunbiade.com/wp-json/wp/v2/shops`).then((response) => response.json())
        ]).then(([bookdata, clothdata]) =>{
            this.setState({
                bookdata: bookdata,
                clothdata:clothdata
            })
        })
        .catch((error)=>{
            console.log(error)
        })
    }

  render() {
    const joybooks = {
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };

    return (
        <ProductConsumer>
            {value=>{
                return(
                    <div className='homepage'>
                        <div className="header">
                            <div className="header-info">
                            <h1><span className="header-shoe">JoyAgunbiade</span> Shop </h1>
                            <p>Best Designers clothes for you | Books that change your life</p>
                            </div>
                        </div>

                        <div className='container'>
                            <div className="home-bookpage">
                                <h2>Our books</h2>

                                <div className='home-slider'>
                                    <div className='home-icon'>
                                        <button className="button" onClick={this.previous}>
                                            <GrFormPrevious className="react-icon" />
                                        </button>
                                        <button className="button" onClick={this.next}>
                                            <MdNavigateNext className="react-icon"/>
                                        </button>
                                    </div>
                                    <Slider  ref={c => (this.slider = c)} {...joybooks} className='home-book'>
                                        {this.state.bookdata.map(book=>{
                                            return(
                                                <div className='home-book-content' key={book.id}>
                                                    <div className='book-img'>
                                                        <NavLink to={`/books/${book.id}`} className="homebook-nav">
                                                            <img src={book.acf.image} alt="books" />
                                                        </NavLink>
                                                    </div>
                                                    <div className='home-title'>
                                                        <NavLink to={`/books/${book.id}`} className="homebook-nav">
                                                        {book.title.rendered}</NavLink>
                                                    </div>
                                                        
                                                    <p>${book.acf.price}</p>
                                                </div>
                                            )
                                        })}
                                    </Slider>                                    
                                </div>
                                <NavLink to="all_books" className="homeview-nav"><div className='view-all'>View All Books</div></NavLink> 
                            </div>


                            {/* code to display the  cloth in homepage*/}
                            <div className=''>
                                
                            </div>

                            <div className='home-bookpage home-clothpage'>
                                <h2>Our Designer clothes</h2>

                                <HomeCloth />                               
                                <NavLink to="/products" className="homeview-nav"><div className='view-all'>View All cloth</div></NavLink>
                            </div>
                            
                        </div>
                    </div>
                )
            }}
        
        </ProductConsumer>
    )
  }
}

export default MainHome1