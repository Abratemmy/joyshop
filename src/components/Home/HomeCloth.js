import React, { Component } from 'react';
import Slider from "react-slick";
import { NavLink } from 'react-router-dom';
import {MdNavigateNext} from "react-icons/md";
import {GrFormPrevious} from "react-icons/gr"

export class HomeCloth extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             clothdata:[],
        }
        this.clothnext = this.clothnext.bind(this);
        this.clothprevious = this.clothprevious.bind(this);
    }
    clothnext() {
        this.slider.slickNext();
    }
    clothprevious() {
        this.slider.slickPrev();
    }
    componentDidMount(){
        return fetch(`https://wp.joyagunbiade.com/wp-json/wp/v2/shops`)
        .then((response) =>response.json())
        .then((responseJson) =>{
            this.setState({
                clothdata: responseJson,
            });
        })
        .catch((error)=>{
            console.log(error)
        })
    }
  render() {
    const joycloth = {
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };
    return (
      <div>
          <div className='home-slider'>
                <div className='home-icon'>
                    <button className="button" onClick={this.clothprevious}>
                        <GrFormPrevious className="react-icon" />
                    </button>
                    <button className="button" onClick={this.clothnext}>
                        <MdNavigateNext className="react-icon"/>
                    </button>
                </div>

                <Slider  ref={c => (this.slider = c)} {...joycloth} className='home-book'>
                    {this.state.clothdata.map(cloth=>{
                        return(
                            <div className='home-book-content' key={cloth.id}>
                                <div className='book-img'>
                                    <NavLink to={`/details/${cloth.id}`} className="homebook-nav">
                                        <img src={cloth.acf.image.url} alt="books" />
                                    </NavLink>
                                </div>
                                <div className='home-title'>
                                    <NavLink to={`/details/${cloth.id}`} className="homebook-nav">
                                    {cloth.title.rendered}</NavLink>
                                </div>
                                    
                                <p>${cloth.acf.price}</p>
                            </div>
                        )
                    })}
                </Slider>     
            </div>
      </div>
    )
  }
}

export default HomeCloth