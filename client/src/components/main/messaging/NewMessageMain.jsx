import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import NewMessageLayout from './NewMessageLayout';
import NewMessageBody from './NewMessageBody';
import NewMessageFooter from './NewMessageFooter';
import NewMessageHeader from './NewMessageHeader';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function NewMessageMain(props) {
  const { classes } = props;

  return (
    <div>
      <NewMessageLayout>
        <NewMessageHeader />
        <br />
        <NewMessageBody />
        <br />
        <NewMessageFooter />
        <br />
      </NewMessageLayout>
    </div>
  );
}

NewMessageMain.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewMessageMain);