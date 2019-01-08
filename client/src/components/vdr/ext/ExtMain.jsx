import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ExtNewVdr from './ExtNewVdr';

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
      newVdr: false
    }
  };

  onNewVdr = () => {
    this.setState((prevState) => ({
      newVdr: !prevState.newVdr
    }))
  };

  showContent = (props) => {
    const { classes } = this.props;
    if (!this.state.newVdr) {
      return (
        <div>
          <Button variant="outlined" color="primary" className={classes.button} onClick={this.onNewVdr}>
            {`Submit New Disclosure`}
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