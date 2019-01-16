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

function MessageSubject(props) {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<Paper className={classes.root} elevation={1}>
				<Typography component="h2" variant="h1" gutterBottom>
					{`Subject`}
				</Typography>
			</Paper>
		</div>
	);
}

MessageSubject.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MessageSubject);
