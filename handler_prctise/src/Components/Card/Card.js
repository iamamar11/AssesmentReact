import React from 'react'
import './Card.css'
import styled from 'styled-components';

    const Div = styled.div`
        width : 100%;
        margin : 10px auto;
        padding : 0px 80px;
        border : 1px solid black;
    `;

    const Card = (props) => {
        return (
            <Div className = 'Card'>
                <section>
                    <img src={props.pic} alt='No Pic'/>
                    <h3>{props.fullname}</h3>
                    <p>Email: {props.email} </p>
                    <p>company: {props.company}</p>
                    <p>skill: {props.skill}</p>
                    <p>Average: {props.average} %</p>
                    { props.show ?
                    <article>
                        {props.grades.map(grades => {
                           return <p> Test : {grades}</p>
                        })}
                        
                    </article> : null
                }
                </section>

                <i className="fas fa-plus fa-2x" onClick = {props.toggleHandler}></i>
                {/* <Button onClick = {props.toggleHandler}>Toggle</Button> */}
            </Div>
        )
    }

export default Card
