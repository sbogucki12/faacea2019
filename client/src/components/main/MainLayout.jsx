import React from 'react'; 

const MainLayout = (props) => {
    return(
        <React.Fragment>
            <h2>This is the main layout</h2>
            {props.children}
        </React.Fragment>
    )
};

export default MainLayout; 