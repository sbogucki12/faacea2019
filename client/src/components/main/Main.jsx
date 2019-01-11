import React from 'react'; 
import PropTypes from 'prop-types';
import MainLayout from './MainLayout';
import Toolbar from './Toolbar';
import MainWindow from './MainWindow';
import MainDrawer from './MainDrawer';
import MainFooter from './MainFooter';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    main: {
        [theme.breakpoints.up('sm')]:   {
            marginLeft: 240
        }
    }
  });

function Main(props) {
    const { classes } = props;
    return(
        <div>
            <MainLayout>
                <div className={classes.main}>
                    <center>
                        <Toolbar />
                        <br />
                        <MainWindow />
                        <br />
                        <MainFooter />
                    </center>
                </div>
                <br />
                <MainDrawer />
                <br />
            </MainLayout>
        </div>
    )
};

Main.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);