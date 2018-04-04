import React from 'react'
import PropTypes from 'prop-types'
import {Button} from 'react-bootstrap'
import { connect } from 'react-redux'
import {changeSlide} from '../../actions'

import Timer from '../../timer';

import './pagination.component.css'


class Pagination extends React.Component {
    constructor(props){
        super(props);

        this.timer = new Timer(6000);
    }

    componentDidMount(){
        this.elem = document.getElementById('slider');
        this.elem.addEventListener('mouseenter', this.timer.suspend);
        this.elem.addEventListener('mouseleave', this.timer.resume);
    }

    componentWillUnmount(){
        this.timer.stop();
    }

    render(){
        const {onPrevClick, onNextClick } = this.props;
        this.timer.start(onNextClick);

        return (
            <div className='pagination'>
                <Button className='prev'
                        bsStyle='primary'
                        onClick={() => onPrevClick()}
                >
                    Prev slide
                </Button>

                <Button className='next'
                        bsStyle='primary'
                        onClick={() => onNextClick()}
                >
                    Next slide
                </Button>
            </div>
        );
    }
}

Pagination.propTypes = {
    currentSlide: PropTypes.number,
    slides_quantity: PropTypes.number,
    onPrevClick: PropTypes.func,
    onNextClick: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        currentSlide: state.pagination.currentSlide,
        slides_quantity: state.slides.length
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onPrevClick: (currentSlide, slides_quantity) => dispatch(
            changeSlide('prev', currentSlide, slides_quantity)
        ),
        onNextClick: (currentSlide, slides_quantity) => dispatch(
            changeSlide('next', currentSlide, slides_quantity)
        )
    };
};

function mergeProps(stateProps, dispatchProps) {
    return {
        ...stateProps,
        onPrevClick: () => dispatchProps.onPrevClick(
            stateProps.currentSlide,
            stateProps.slides_quantity
        ),
        onNextClick: () => dispatchProps.onNextClick(
            stateProps.currentSlide,
            stateProps.slides_quantity
        ),
    };
}

Pagination = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Pagination);

export default Pagination;
