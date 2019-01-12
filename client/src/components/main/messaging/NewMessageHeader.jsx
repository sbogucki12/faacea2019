import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    flexGrow: 1,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  button: {
    margin: theme.spacing.unit,
    [theme.breakpoints.up('md')]:{
        float: "right"
    }
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "100%"
  }
});

function NewMessageHeader(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
        <Grid container spacing={8}>
            <Grid item md={2}>
                <Button variant="contained" className={classes.button}>
                    {`To:`}
                </Button>
            </Grid>
            <Grid item md={9}>
                <TextField variant="outlined" className={classes.textField} />
            </Grid>
            <Grid item md={1} />
        </Grid>
    </div>
  );
}

NewMessageHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewMessageHeader);