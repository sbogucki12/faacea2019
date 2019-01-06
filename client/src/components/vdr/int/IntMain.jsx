import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function IntMain(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="outlined" color="primary" className={classes.button}>
        Primary
      </Button>
    </div>
  );
}

IntMain.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IntMain);