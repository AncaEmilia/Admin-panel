import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', border: '2px solid #6495ED ', height: '817px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;