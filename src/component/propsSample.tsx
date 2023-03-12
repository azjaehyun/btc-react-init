
import React  from 'react';


type PropsSampleProps = {
    name : string;
    mark : string;
}

function PropsSample({name, mark}:PropsSampleProps) {

    return(
        <div>
            Hello ! {name} {mark}
        </div>
    )
}

PropsSample.defaultProps = {
    name: 'nametest',
    mark : '!'
}

export default PropsSample;