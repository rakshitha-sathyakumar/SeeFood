import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Home from './Home/Home';
import NearbyRestaurants from './NearbyRestaurants/NearbyRestaurants';

class Main extends Component {
    render() {
        return(
            <div>
                {/* <Route path="/" component={Home}/> */}
                <Route path="/Home" component={Home}/>
                <Route path="/NearbyRestaurants" component={NearbyRestaurants}/>
            </div>
        )
    }
}

export default  Main;