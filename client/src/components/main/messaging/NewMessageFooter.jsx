import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
	root: {
		...theme.mixins.gutters(),
		paddingTop: theme.spacing.unit * 2,
		paddingBottom: theme.spacing.unit * 2,
		flexGrow: 1,
	},
	button: {
		margin: theme.spacing.unit,
		// position: "relative"
	},
});

function NewMessageFooter(props) {
	const { classes } = props;


	return (
		<div className={classes.root}>
			<Paper className={classes.root} elevation={2}>
				<Grid container spacing={0}>
					<Grid item xs={0} md={5} lg={8} />
					<Grid item xs={12} md={3} lg={2}>
						<Button variant="outlined" className={classes.button}>
							{`Attachment`}
						</Button>
					</Grid>
					<Grid item xs={8} md={2} lg={1}>
						<Button variant="contained" className={classes.button}>
							{`Save`}
						</Button>
					</Grid>
					<Grid item xs={4} md={2} lg={1}>
						<form type="submit" onSubmit={props.onHandleSubmit}>
						<Button variant="contained" color="primary" type="submit" className={classes.button}>
							{`Send`}
						</Button>
						</form>
					</Grid>
				</Grid>
			</Paper>
		</div>
	);
}

NewMessageFooter.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewMessageFooter);
