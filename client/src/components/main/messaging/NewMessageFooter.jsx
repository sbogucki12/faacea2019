import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const styles = theme => ({
	root: {
		...theme.mixins.gutters(),
		paddingTop: theme.spacing.unit * 2,
		paddingBottom: theme.spacing.unit * 2,
		display: 'flex',
		justifyContent: 'flex-end',
	},
	button: {
		margin: theme.spacing.unit,
		// position: "relative"
	},
});

function NewMessageFooter(props) {
	const { classes } = props;

	return (
		<div>
			<Paper className={classes.root} elevation={2}>
				<Button variant="outlined" className={classes.button}>
					{`Attachment`}
				</Button>

				<Button variant="contained" className={classes.button}>
					{`Save`}
				</Button>

				<form type="submit" onSubmit={props.onHandleSubmit}>
					<Button variant="contained" color="primary" type="submit" className={classes.button}>
						{`Send`}
					</Button>
				</form>
			</Paper>
		</div>
	);
}

NewMessageFooter.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewMessageFooter);
