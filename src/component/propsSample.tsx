
import React  from 'react';
import Button from '@mui/material/Button';


type PropsSampleProps = {
    name : string;
    mark : string;
}

function PropsSample({name, mark}:PropsSampleProps) {

    return(
        <div>
            Hello ! {name} {mark}
            <Button variant="text">button</Button>
            <Button variant="contained">Contained</Button>
        </div>
    )
}

PropsSample.defaultProps = {
    name: 'nametest',
    mark : '!'
}

export default PropsSample;