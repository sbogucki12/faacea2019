import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, withTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ReplyIcon from '@material-ui/icons/ReplyTwoTone';
import DeleteIcon from '@material-ui/icons/DeleteTwoTone';
import ReplyAllIcon from '@material-ui/icons/ReplyAllTwoTone';
import ForwardIcon from '@material-ui/icons/ForwardTwoTone';
import Fab from '@material-ui/core/Fab';
import blueGrey from '@material-ui/core/colors/blueGrey';

const styles = theme => ({
	root: {
		...theme.mixins.gutters(),
		paddingTop: theme.spacing.unit * 2,
		paddingBottom: theme.spacing.unit * 2,
	},
	appBar: {
		top: 'auto',
		bottom: 0,
	},
	toolbar: {
		display: 'flex',
		justifyContent: 'flex-end',
	},
	fabButton: {
		top: -30,
		margin: 2,
	},
	deleteButton: {
		top: -30,
		margin: 2,
		backgroundColor: '#dd2c00',
		'&:hover': {
			backgroundColor: '#ff7961',
		},
	},
	forwardButton: {
		top: -30,
        margin: 2,
		backgroundColor: '#b0bec5',
		'&:hover': {
			backgroundColor: '#eceff1',
		},
	},
});

function MessageFooter(props) {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<AppBar position="sticky" color="primary" className={classes.appBar}>
				<Toolbar className={classes.toolbar}>
					{/* <IconButton color="inherit" aria-label="Open drawer">
							<MenuIcon />
                        </IconButton> */}
					<Fab aria-label="Reply" className={classes.deleteButton}>
						<DeleteIcon />
					</Fab>
					<Fab color="secondary" aria-label="Reply" className={classes.forwardButton}>
						<ForwardIcon />
					</Fab>
					<Fab color="secondary" aria-label="Reply" className={classes.fabButton}>
						<ReplyAllIcon />
					</Fab>
					<Fab color="primary" aria-label="Reply" className={classes.fabButton}>
						<ReplyIcon />
					</Fab>
				</Toolbar>
			</AppBar>
		</div>
	);
}

MessageFooter.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MessageFooter);
