import React, { Component, Fragment } from 'react';
import {MdNavigateNext} from "react-icons/md";
import {GrFormPrevious} from "react-icons/gr";
import Slider from "react-slick";
import { NavLink } from 'react-router-dom';

export class Singlepopularbook extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            popularbook:[]
        }

        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    componentDidMount(){
        return fetch(`https://wp.joyagunbiade.com/wp-json/wp/v2/bookshops`)
        .then((response) =>response.json())
        .then((responseJson) =>{
            this.setState({
                popularbook: responseJson,
            });
        })
        .catch((error)=>{
            console.log(error)
        })
    }
  render() {
    const popularbooks = {
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
    return (
      <div>            
            <div className="">
                <div className='home-icon'>
                    <button className="button" onClick={this.previous}>
                        <GrFormPrevious className="react-icon" />
                    </button>
                    <button className="button" onClick={this.next}>
                        <MdNavigateNext className="react-icon"/>
                    </button>
                </div>

                <Slider ref={c => (this.slider = c)} {...popularbooks} className='singlepopular-book'>                
                    {this.state.popularbook.map(popularbook=>{
                        return(
                            <Fragment>
                                {(popularbook.acf.popularitem)=== true ? (
                                    <div className='singlepopular-slide' key={popularbook.id}>                                        
                                        <div className='singlepopular-book-img'>
                                            <NavLink to={`/books/${popularbook.id}`}>
                                            <img src={popularbook.acf.image} alt="popularbooks" />
                                            </NavLink>
                                        </div>
                                        <div className='home-title'>
                                            <NavLink to={`/books/${popularbook.id}`} className="homebook-nav">
                                            {popularbook.title.rendered}</NavLink>
                                        </div>

                                        <p>${popularbook.acf.price}</p>
                                    
                                    </div>): (<div className='popular-noshow'></div>)
                                
                                }
                            </Fragment>
                        )
                    })}
               
                </Slider>

            </div>
      </div>
    )
  }
}

export default Singlepopularbook