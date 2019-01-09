import React from 'react'; 
import MainLayout from './MainLayout';
import Toolbar from './Toolbar';
import MainWindow from './MainWindow';
import MainDrawer from './MainDrawer';
import MainFooter from './MainFooter';

function Main() {
    return(
        <div>
            <MainLayout>
                <center>
                    <Toolbar />
                    <br />
                    <MainWindow />
                </center>
                <br />
                <MainDrawer />
                <br />
                <center>
                    <MainFooter />
                </center>
            </MainLayout>
        </div>
    )
};

export default Main; 