import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LayoutVDR from "./vdr/main/LayoutVDR"; 

const SurveyNew = () => <h2>{`SurveyNew`}</h2>
const Landing = () => <h2>{`Landing`}</h2>


const App = () => {
    return (
        <div style={{ overflowX: "hidden" }}>
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Landing} /> 
                    <Route exact path="/vdr/main" component={LayoutVDR} />
                    <Route exact path="/surveys/new" component={SurveyNew} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App; 