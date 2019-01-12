import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function NewMessageFooter(props) {
  const { classes } = props;

  return (
    <React.Fragment>
        <h2>{`This is the NewMessageFooter`}</h2>
    </React.Fragment>
  );
}

NewMessageFooter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewMessageFooter);