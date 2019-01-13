import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import UnreadIcon from '@material-ui/icons/MarkunreadTwoTone';
import messageDummyData from '../../../dummyData/messageDummyData';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
	root: {
		...theme.mixins.gutters(),
		paddingTop: theme.spacing.unit * 2,
		width: '100%',
		backgroundColor: theme.palette.background.paper,
	},
	paperRoot: {
		// ...theme.mixins.gutters(),
		paddingTop: theme.spacing.unit * 1,
		paddingBottom: theme.spacing.unit * 2,
	},
	icon: {
		margin: theme.spacing.unit,
	},
});

// function ListItemLink(props) {
// 	return <ListItem button component="a" {...props} />;
// }

function InboxList(props) {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<Paper className={classes.paperRoot} elevation={1}>
				<List component="nav">
					{messageDummyData.map(message => {
						return (
							<React.Fragment>
								<ListItem button>
									<ListItemIcon>
										<UnreadIcon className={classes.icon} />
										<ListItemText primary={message.date} secondary={message.time} />
									</ListItemIcon>
									<ListItemText primary={message.email} secondary={message.subject} />
								</ListItem>
								<Divider />
							</React.Fragment>
						);
					})}
				</List>
			</Paper>
		</div>
	);
}

InboxList.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InboxList);
