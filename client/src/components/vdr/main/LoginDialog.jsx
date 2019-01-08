import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class LoginDialog extends React.Component {
  state = {
    open: true,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <React.Fragment>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Terms of Use"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {`Irure dolor anim id sit. Ut tempor consectetur qui officia. Fugiat proident quis in in officia labore ipsum incididunt aliqua. Duis consequat labore mollit pariatur enim labore. Sit veniam aute voluptate ea sint deserunt labore aliqua fugiat qui amet ea. Veniam eu occaecat irure commodo.`}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" disabled>
              Disagree
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default LoginDialog;