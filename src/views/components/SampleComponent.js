import React from 'react';
import { Link } from 'react-router-dom';

function SampleComponent(props) {
  return (
    <div className="SampleComponent">
        <ul>
            <li>Company : {props.nama} </li>
            <li>Contact :{props.contact}</li>
            <li>Email : {props.email}</li>
        </ul>
        <Link to={'/sample-page/'+ props.id} >Detail Company</Link>
    </div>
  );
}

export default SampleComponent;
