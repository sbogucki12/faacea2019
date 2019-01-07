import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import caseInfo from './CaseInfo';

const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class CaseInfoDialog extends React.Component {
  state = {
    open: false,
  };

  listItems = () => {
    return(
        caseInfo.map((listItem) => 
        <React.Fragment>
            <ListItem >
                <ListItemText key={listItem.id} primary={listItem.label}>
                    {listItem.label}
                </ListItemText>
            </ListItem>
            <Divider />  
        </React.Fragment>
    ));
}

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          {`Show Disclosure Information`}
        </Button>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                {`Case Number`}
              </Typography>
              <Button color="inherit" onClick={this.handleClose}>
                {`Close`}
              </Button>
            </Toolbar>
          </AppBar>
          <List>
              {this.listItems()}
          </List>
        </Dialog>
      </div>
    );
  }
}

CaseInfoDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CaseInfoDialog);