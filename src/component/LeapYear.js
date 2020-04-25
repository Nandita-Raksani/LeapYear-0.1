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
        if(this.isNotAValidYear()){
            this.setState({"isLeapYear": "Enter a valid year"});
        } else { 
            if(this.isValidLeapYear()){
                this.setState({"isLeapYear": "Is a Leap Year"});
            } else {
                this.setState({"isLeapYear": "Is not a Leap Year"});
            }
        }
    }

    isValidLeapYear = () => {
        return this.isDivisibleBy400() || this.isDivisibleBy4Not100();
    }

    isNotAValidYear = () => {
        return this.isNotANumber() || this.isNotAInteger() || this.isNotANegativeNumber();
    }

    isNotANumber = () => {
       return isNaN(this.state.year);
    }

    isNotAInteger = () => {
        return this.state.year != parseInt(this.state.year, 10);
    }

    isNotANegativeNumber = () => {
        return this.state.year <= 0;
    }

    isDivisibleBy400 = () =>{
        return this.state.year % 400 === 0;
    }

    isDivisibleBy4Not100 = () =>{
        return this.state.year % 4 === 0 && this.state.year % 100 != 0;
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