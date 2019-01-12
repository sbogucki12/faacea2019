import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ExtVdrMain from '../vdr/ext/ExtMain';
import NewMessageMain from './messaging/NewMessageMain';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  }
});

class MainWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userType: "ext", 
            page: "newMessage"
        };
    }
    render() {
        const { classes } = this.props;
        let mainContent; 
        if(this.state.userType === "int" && this.state.page === "main"){
            mainContent = 
                <div>
                    <Paper className={classes.root} elevation={1}>
                        <Typography variant="h5" component="h3">
                            {`This is the Int Main Content`}
                        </Typography>
                    </Paper>
                </div>
            } else if (this.state.userType === "ext" && this.state.page === "main") {
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
            }   else if (this.state.userType === "ext" && this.state.page === "vdr") {
                    mainContent = 
                        <div>
                            <Paper className={classes.root} elevation={1}>
                                <ExtVdrMain />
                            </Paper>
                        </div>
            }   else if (this.state.page === "newMessage") {
                    mainContent = 
                        <div>
                            <Paper className={classes.root} elevation={1}>
                                <NewMessageMain />
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