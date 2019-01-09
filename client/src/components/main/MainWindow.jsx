import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TempSplashWindow from '../vdr/main/TempSplashWindow';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

class MainWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vdr: false
        };
    }

    showContent = (props) => {
        const { classes } = this.props;
        if(this.state.vdr){
            return(
                <React.Fragment>
                    <TempSplashWindow />
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <Paper className={classes.root} elevation={1}>
                        <Typography variant="h5" component="h3">
                            {`This is the Main Window`}
                        </Typography>
                    </Paper>
                </React.Fragment>
            )
        }
    }

    render() {
        return (
            <div>
                {this.showContent()}
            </div>
        );
    }
}

MainWindow.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainWindow);