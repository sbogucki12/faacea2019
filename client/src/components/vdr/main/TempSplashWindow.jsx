import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

const styles = theme => ({
    root: {
        display: 'flex', 
        justifyContent: 'center',
        paddingTop: '10%'
    }
});

class TempSplashWindow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: 'internal'
        }
    };

    makeExternal = () => {
        this.setState({
            user: 'external'
        })
    };

    makeInternal = () => {
        this.setState({
            user: 'internal'
        })
    };

    render(){
        const { classes } = this.props;
        return(
            <div className={classes.root}>
                <Button onClick={this.makeExternal}>{`Toggle External User`}</Button>
                <Button onClick={this.makeInternal}>{`Toggle Internal User`}</Button>
                {console.log(this.props)}
            </div>
        )
    }
}

TempSplashWindow.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
function mapStateToProps(user){
    return { user }
}

export default connect(mapStateToProps)(withStyles(styles)(TempSplashWindow));