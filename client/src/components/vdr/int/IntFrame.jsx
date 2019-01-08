import React from 'react';

export default function IntFrame(props) {
    return (
      <div>
        <h2>{`This is the IntFrame`}</h2>
        {props.children}
      </div>
    );
  }