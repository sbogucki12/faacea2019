import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});

function NewMessageBody(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.root} elevation={2}>
      <TextField
          className={classes.textField}
          id="subject"
          label="Subject"
          style={{ margin: 8 }}
          placeholder="Subject"
          name="subject"
          // helperText="Enter Message Here"
          fullWidth
          margin="normal"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
          // value={props.subject}
          onChange={props.onHandleChange}
        />
      <TextField
          className={classes.textField}
          id="body"
          label="Body"
          name="body"
          style={{ margin: 8 }}
          placeholder="Enter Message Here"
          // helperText="Enter Message Here"
          fullWidth
          multiline
          rows="15"
          margin="normal"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={props.onHandleChange}
        />
      </Paper>
    </div>
  );
}

NewMessageBody.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewMessageBody);