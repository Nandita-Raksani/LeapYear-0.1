import React from 'react';

export default class LeapYear extends React.Component {
    constructor(props) {
        super(props);
        this.state = {"year": ''};
        this.state = {"isLeapYear": ''};
        this.handleChange = this.handleChange.bind(this);
        this.isLeapYear = this.isLeapYear.bind(this);
      }

      isLeapYear(event) {
        var isLeapYear = false;
        if(this.state.year % 400 === 0 ){
            isLeapYear = true;
        } else if(this.state.year % 4 === 0){
            isLeapYear = true;
        }
        if(isLeapYear){
        this.setState({"isLeapYear": "Is a Leap Year"});
        } 
    }

    handleChange(event) {
        this.setState({"year": event.target.value});
    }

    render() {
        return (
          <form>
             <label> Enter a year : </label>
             <input type="text" value={this.state.year} onChange={this.handleChange}/>
             <br/>
             <button  name="submit" onClick={this.isLeapYear}> Submit</button> 
             <br/>
             <label>{this.state.isLeapYear}</label>   
            </form>
        );
      }
    }