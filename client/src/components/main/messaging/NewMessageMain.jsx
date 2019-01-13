import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import NewMessageLayout from './NewMessageLayout';
import NewMessageBody from './NewMessageBody';
import NewMessageFooter from './NewMessageFooter';
import NewMessageHeader from './NewMessageHeader';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

class NewMessageMain extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <NewMessageLayout>
          <Paper elevation={6}>
          <NewMessageHeader /> 
          <NewMessageBody />
          <NewMessageFooter />
          <br />
          </Paper>
        </NewMessageLayout>
      </div>
    );
  }
}

NewMessageMain.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewMessageMain);