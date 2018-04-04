import React from 'react'
import { Provider } from 'react-redux'
import configureStore from '../../configureStore'
import data from '../../data'
import SliderApp from '../slider-app/slider-app.component';

const store = configureStore(data);

class Root extends React.Component{
    render(){
        return (
            <Provider store={store}>
                <SliderApp />
            </Provider>
        );
    }
}

export default Root;
