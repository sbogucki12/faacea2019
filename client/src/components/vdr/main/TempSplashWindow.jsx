import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import ExtMain from '../ext/ExtMain';
import IntMain from '../int/IntMain';

const styles = theme => ({
    root: {
        display: 'flex', 
        justifyContent: 'center',
        paddingTop: '10%'
    }
});

class TempSplashWindow extends React.Component {
    showContent = () => {
        console.log("this is this.user" + this.props.user.user)
        if (this.props.user) {
            if (this.props.user.user === "internal") {
                return (
                    <React.Fragment>
                        <IntMain />
                    </React.Fragment>
                )
            } else if (this.props.user.user === "external") {
                return (
                    <React.Fragment>
                        <ExtMain />
                    </React.Fragment>
                )
            } else {
                return (
                    <React.Fragment>
                        {`Error View`}
                    </React.Fragment>
                )
            }
        }


        else {
            return (
                <React.Fragment>
                    {`Default View`}
                </React.Fragment>
            )
        }
    }


    render(){
        const { classes } = this.props;
        return(
            <React.Fragment>
                <h2>{`This is VDR`}</h2>
                <div className={classes.root}>
                    <Button onClick={this.props.makeExternal}>{`Toggle External User`}</Button>
                    <Button onClick={this.props.makeInternal}>{`Toggle Internal User`}</Button>
                </div>
                {this.showContent()}
            </React.Fragment>
        )
    }
}

TempSplashWindow.propTypes = {
    classes: PropTypes.object.isRequired,
    makeExternal: PropTypes.func.isRequired,
    makeInternal: PropTypes.func.isRequired
  };
  
const mapStateToProps = state => ({
    ...state,
    user: state.user
})

export default connect(mapStateToProps, actions)(withStyles(styles)(TempSplashWindow));