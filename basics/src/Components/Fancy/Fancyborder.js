import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    background : lightblue;
    border: 2px solid black;
    padding : 5px;
`;
const Fancyborder = (props) => {
    return(
        <Div className="Fancy">
            {props.children}
        </Div>
    );
}
export default Fancyborder;
