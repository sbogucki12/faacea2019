import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import ReplyIcon from '@material-ui/icons/ReplyTwoTone';
import Fab from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';

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
		// alignItems: 'center',
		justifyContent: 'space-between',
	},
	fabButton: {
		position: 'absolute',
		top: -30,
		margin: '0 auto',
		zIndex: 1,
		left: '80vw',
		// right: '10%vw',
	},
	fabButton2: {
		position: 'absolute',
		top: -30,
		margin: '0 auto',
		zIndex: 1,
		left: '70vw',
		// right: '20%vw',
	},
	fabButton3: {
		position: 'absolute',
		top: -30,
		margin: '0 auto',
		zIndex: 1,
		left: '60vw',
		// right: '20%vw',
	},
	fabButton4: {
		position: 'absolute',
		top: -30,
		margin: '0 auto',
		zIndex: 1,
		left: '50vw',
		// right: '20%vw',
	},
	fabButton5: {
		position: 'absolute',
		top: -30,
		margin: '0 auto',
		zIndex: 1,
		left: '40vw',
		// right: '20%vw',
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
					<div className={classes.root} container>
						<Fab color="secondary" aria-label="Reply" className={classes.fabButton}>
							<ReplyIcon />
						</Fab>
						<Fab color="secondary" aria-label="Reply" className={classes.fabButton2}>
							<ReplyIcon />
						</Fab>
						<Fab color="secondary" aria-label="Reply" className={classes.fabButton3}>
							<ReplyIcon />
						</Fab>
						<Fab color="secondary" aria-label="Reply" className={classes.fabButton4}>
							<ReplyIcon />
						</Fab>
						<Fab color="secondary" aria-label="Reply" className={classes.fabButton5}>
							<ReplyIcon />
						</Fab>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}

MessageFooter.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MessageFooter);
