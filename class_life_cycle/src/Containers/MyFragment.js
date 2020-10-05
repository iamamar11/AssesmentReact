import React from 'react';

const ListItem = props => {
    return(
        <React.Fragment>
            <td>AMAR</td>
            <td>AMAR</td>
            <td>AMAR</td>
            <td>AMAR</td>
        </React.Fragment>
    );
}
const List = props => {
    return(
        <table>
            <tr>
                <ListItem></ListItem>
            </tr>
        </table>
    );
}
export default List