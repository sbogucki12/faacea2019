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

function MessageBody(props) {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<Paper className={classes.root} elevation={1}>
				<Typography variant="body1" gutterBottom>
					{`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
					suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos
					laborum fugiat deleniti? Eum quasi quidem quibusdam.`}
				</Typography>
			</Paper>
		</div>
	);
}

MessageBody.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MessageBody);
