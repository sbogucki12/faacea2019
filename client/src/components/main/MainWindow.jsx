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
            userType: ""
        };
    }
    render() {
        const { classes } = this.props;
        let mainContent; 
        if(this.state.userType === "int"){
            mainContent = 
                <div>
                    <Paper className={classes.root} elevation={1}>
                        <Typography variant="h5" component="h3">
                            {`This is the Int Main Content`}
                        </Typography>
                    </Paper>
                </div>
            } else if (this.state.userType === "ext") {
                mainContent = 
                    <div>
                        <Paper className={classes.root} elevation={1}>
                            <Typography variant="h5" component="h3">
                                {`This is the Ext Main Content`}
                            </Typography>
                        </Paper>
                    </div>
            }   else if (this.state.userType !== "int" && this.state.userType !== "ext") {
                    mainContent = 
                        <div>
                            <Paper className={classes.root} elevation={1}>
                                <Typography variant="h5" component="h3">
                                    {`This is the Error Main Content`}
                            </Typography>
                            </Paper>
                     </div>
            }

        return mainContent        
    }
}

MainWindow.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainWindow);