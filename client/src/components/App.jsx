import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LayoutVDR from "./vdr/main/LayoutVDR"; 
import LoginVDR from './vdr/main/LoginVDR';
import { connect } from 'react-redux';
import * as actions from '../actions';

const SurveyNew = () => <h2>{`SurveyNew`}</h2>

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
                        <Route exact path="/vdr/main" component={LayoutVDR} />
                        <Route exact path="/surveys/new" component={SurveyNew} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};

export default connect(null, actions)(App); 