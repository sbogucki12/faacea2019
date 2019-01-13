import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ExtNewVdr from './ExtNewVdr';
import NewMessageMain from '../../main/messaging/NewMessageMain';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class ExtMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newVdr: false,
      message: false
    }
  };

  onNewVdr = () => {
    this.setState((prevState) => ({
      newVdr: !prevState.newVdr
    }))    
  };

  onNewMessage = () => {
    this.setState((prevState) => ({
      message: !prevState.message
    }))
  };

  showNewVdr = (props) => {
    const { classes } = this.props;
    if (!this.state.newVdr) {
      return (
        <div>
          <Button variant="outlined" color="primary" className={classes.button} onClick={this.onNewVdr}>
            {`Submit New Disclosure`}
          </Button>
          <Button variant="outlined" color="primary" className={classes.button} onClick={this.onNewMessage}>
            {`New Message`}
          </Button>
        </div>
      );
    } else {
      return (
        <div>
          <ExtNewVdr />          
        </div>
      )
    }
  }

  showContent = () => {
    if(this.state.message){
      return (
        <React.Fragment>
          <NewMessageMain/>
        </React.Fragment>
      )
    } else {
      return this.showNewVdr();
    }
  }

  render(){
    return(
      <React.Fragment>
        {this.showContent()}
      </React.Fragment>
    )
  }

}
ExtMain.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExtMain);