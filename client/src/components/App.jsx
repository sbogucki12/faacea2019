import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LayoutVDR from "./vdr/main/LayoutVDR"; 
import LoginVDR from './vdr/main/LoginVDR';
import { connect } from 'react-redux';
import * as actions from '../actions';
import IntNewVdr from './vdr/int/IntNewVdr';
import IntMain from './vdr/int/IntMain';

class App extends React.Component {
    componentDidMount(){
        this.props.fetchUser();
    }
    
    render() {
        return (
            <div style={{ overflowX: "hidden" }}>
                <BrowserRouter>
                    <div>
                        <Route exact path="/" component={LoginVDR} /> 
                        <Route path="/main" component={LayoutVDR} />                        
                        <Route path="/vdr/main" component={LayoutVDR} />                        
                        <Route exact path="/surveys/new" component={IntNewVdr} />
                        <Route exact path="/practice/test" component={IntMain} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};

export default connect(null, actions)(App); 