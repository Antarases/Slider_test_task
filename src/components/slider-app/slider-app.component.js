import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'react-bootstrap'
import { connect } from 'react-redux';

import Pagination from '../pagination/pagination.component'

import './slider-app.component.css';

class SliderApp extends React.Component{
    render(){
        const {slides, currentSlide} = this.props;

        return (
            <Grid
                id="slider"
                style={{
                    background: `#000 url("${slides[currentSlide].hero}") 50% 50% no-repeat`
                }}
            >
                <div
                    className="title"
                >
                    <span
                        className="image"
                        style={{
                            background: `url("${slides[currentSlide].image}") 50% 50% no-repeat`
                        }}
                    >
                    </span>
                    <span className="text">
                        {slides[currentSlide].text}
                    </span>
                </div>

                <Pagination />
            </Grid>
        );
    }
}

SliderApp.propTypes = {
    slides: PropTypes.arrayOf(
        PropTypes.shape({
            hero: PropTypes.string,
            text: PropTypes.string,
            image: PropTypes.string
        })
    ),
    slides_quantity: PropTypes.number,
    currentSlide: PropTypes.number
};

const mapStateToProps = (state) => {
    return {
        slides: state.slides,
        slides_quantity: state.slides.length,
        currentSlide: state.pagination.currentSlide
    };
};

SliderApp = connect(
    mapStateToProps,
    null
)(SliderApp);

export default SliderApp;
