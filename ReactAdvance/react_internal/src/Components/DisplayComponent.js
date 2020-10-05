import React, { Component } from 'react'
import Btn from './Btn';

const DisplayComponent = (props) =>{

    return(
        <div className='listItem'>
            { 
                (props.value).map((listItems,Index) => {
                    return(
                        <article key={Index}>
                            <h4>{listItems}</h4>
                            <Btn Index = {Index}/>
                        </article>
                    );
                })

            }
        </div>
    );
}

export default DisplayComponent
