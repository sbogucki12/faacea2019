import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Divider from '@material-ui/core/Divider';
import MailIcon from '@material-ui/icons/Mail';
import { extdrawerListUpper, extdrawerListLower } from '../ext/extDrawerListItems';
import { intdrawerListUpper, intdrawerListLower } from '../int/intDrawerListItems';
import { defdrawerListUpper, defdrawerListLower } from '../default/defDrawerListItems';
import { connect } from 'react-redux';

const drawerWidth = 240;

const styles = theme => ({
    root: {
      display: 'flex',
    },
    top: {
      display: 'flex',
      flexGrow: 1,    
      alignItems: 'flex-start',
      paddingLeft: 24,
      flexDirection: 'column',
      justifyContent: 'center'
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {    
      marginLeft: drawerWidth,
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
      },
    },
    menuButton: {
      marginRight: 20,
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
    },
});

class DrawerVDR extends React.Component {  
    render(){
        const { classes } = this.props;

        const isExternalUpper = () => {
            if (this.props.user) {
                if (this.props.user.user === "external") {
                    return (
                        <List>
                            {extdrawerListUpper.map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                    )
                } else {
                    return (
                        <List>
                            {intdrawerListUpper.map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                    )
                }
            } else {
                return (
                    <List>
                        {defdrawerListUpper.map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                )
            }
        }

        const isExternalLower = () => {
            if (this.props.user) {
                if (this.props.user.user === "external") {
                    return (
                        <List>
                            {extdrawerListLower.map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>))}
                        </List>)
                } else if (this.props.user.user === "internal") {
                    return (
                        <List>
                            {intdrawerListLower.map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>))}
                        </List>)
                }
                else {
                    return (
                        <List>
                            {defdrawerListLower.map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>))}
                        </List>)
                }
            } else {
                return (
                    <List>
                        {defdrawerListLower.map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>))}
                    </List>

                )
            }
        }
        
        return(
            <div className={classes.toolbar}>
                <div className={classes.top}>
                    <Typography variant="h5" >
                    {`PROTO`}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                    {`v0.0.1`}
                    </Typography>
                </div>
                <Divider />
                {isExternalUpper()}
                <Divider />
                {isExternalLower()}
            </div>
        );
    }
}

DrawerVDR.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    user: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string    
    ])    
};

const mapStateToProps = state => ({
    user: state.user
})
  
export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(DrawerVDR));
