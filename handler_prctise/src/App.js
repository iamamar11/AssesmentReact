import React, { Component } from 'react'
import Card from './Components/Card/Card'
import axios from 'axios';
import styled from 'styled-components';

  const Div = styled.div`
    width : 50%;
    margin : 10px auto;
    padding : 0px 80px;
    font-weight : normal;
  `;

export class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      data : [],
      indexValue : [],
      text : '',
      searchData : [],
    }
  }
  
  toggleHandler = (index) => {
    let stateObject = [...this.state.indexValue]
    stateObject.splice(index,1,!this.state.indexValue[index]);
    this.setState({ indexValue: stateObject });
  }

  calculate = (grades) =>{
    const convertedArray = grades.map(grades => {
      return parseInt(grades);
    });
    
    const sumOfGrades = convertedArray.reduce(( acc, current ) => {
      return acc + current;
    });
    return sumOfGrades/convertedArray.length
  }

  changeHandler = (e) =>{
    const inputText = e.target.value
    this.setState({ text : inputText });
    const data = this.dynamicSearch(inputText);
    this.setState({ searchData : data  });
  }

  dynamicSearch = (searchValue) => {
    return this.state.data.filter(data => {
      return data.firstName.includes(searchValue) || data.lastName.includes(searchValue);

      // ! search by ID
      // return this.state.titles.filter(titles => titles.includes(searchValue))
    })
  }

  fetchAPI = async() => {
    const API_URL = 'https://www.hatchways.io/api/assessment/students';
    // const API_URL = 'https://jsonplaceholder.typicode.com/posts';
    const response = await axios.get(API_URL);
  
    //! calling calculate function to pass array of grades from conversion and calculation
    this.setState({ 
      data : response.data.students,
    });
  }

  componentDidMount(){
    this.fetchAPI()
  }

  render() {

    const {data, searchData} = this.state;
    let result = null;
    if(searchData.length < 1){
      result = data;
    }else{
      result = searchData;
    }

    return (
      <Div>
        <input type='text' placeholder='enter ID' onChange = {this.changeHandler} />

        {
          result.map((data, index) => {
            this.state.indexValue.push(false);
            const avg = this.calculate(data.grades);
            return (
              <Card key = {index}
                pic = {data.pic}
                fullname = {data.firstName + " " + data.lastName} 
                email = {data.email} 
                company = {data.company}
                skill = {data.skill}
                average = {avg}
                grades = {data.grades}
                show = {this.state.indexValue[index]}
                toggleHandler = {() => this.toggleHandler(index)}
              />)}
          )}
      </Div>
    )
  }
}

export default App
