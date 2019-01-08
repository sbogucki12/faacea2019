import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import caseInfo from '../../main/caseInfo';

const showExtCaseInfo = () => {
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

export default showExtCaseInfo; 