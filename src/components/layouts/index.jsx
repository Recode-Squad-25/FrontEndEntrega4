import React from 'react'
import './layout.css'
export const Layouts = (props) => {
  return (
      <div className="container-fluid">
        <div className="container-login">
          <div className="wrap-login">{props.children}</div>
        </div>
      </div>
  );
};
export default Layouts;