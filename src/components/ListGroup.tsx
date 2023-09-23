import { Fragment } from "react";

function ListGroup() {
    
    const items = [
        'Car',
        'Game',
        'House',
        'Gatden',
        'lowyer',
    ];
    return (        
        <Fragment>
            <h1>List</h1>
            <ul className="list-group list-group-flush">
                {items.map(item => <li className="list-group-item">{item}</li>)}

                  </ul>
        </Fragment>
        );
}

export default ListGroup;