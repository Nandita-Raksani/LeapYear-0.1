import React from 'react';

export default class LeapYear extends React.Component {
    render() {
        return (
          <form>
             <label> Enter a year : </label>
             <input type="text" />
             <br/>
             <button  name="submit" > Submit</button> 
             <br/>
             <label></label>   
            </form>
        );
      }
    }