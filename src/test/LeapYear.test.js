import React from 'react';
import LeapYear from "../component/LeapYear";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});
describe(("<LeapYear/> component"), () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<LeapYear/>);
    });
  
    it("should render correctly", () => {
      expect(wrapper).toMatchSnapshot();
    });

    it("should have a text box to enter the year", () => {
      expect(wrapper.find('input').length).toBe(1);
    });

    it("should have a button to determine the leap year", () => {
        expect(wrapper.find('button').length).toBe(1);
    });

    it("should have a label to display if the given year is leap year", () => {
        expect(wrapper.find('label').at(1).length).toBe(1);
    });
  });

  describe(("<LeapYear/>Leap year functionality"), () => {
    let wrapper, yearText, yearButton;
    beforeEach(() => {
      wrapper = shallow(<LeapYear />);
      yearText = wrapper.find('input').at(0);
      yearButton = wrapper.find('button');
    });
    it("Year divisible by 400 should be a leap year", ()=>{
        yearText.simulate('change', { target: { value: 2000 } });
        yearButton.simulate('click');
        expect(wrapper.find("label").at(1).text()).toEqual("Is a Leap Year");
    })

    it("Year divisible by 4 should be a leap year", ()=>{
        yearText.simulate('change', { target: { value: 2004 } });
        yearButton.simulate('click');
        expect(wrapper.find("label").at(1).text()).toEqual("Is a Leap Year");
    })

    it("Year not divisible by 400 and 4 should not be a leap year", ()=>{
        yearText.simulate('change', { target: { value: 2003 } });
        yearButton.simulate('click');
        expect(wrapper.find("label").at(1).text()).toEqual("Is not a Leap Year");
    })

    it("Year divisible by 4 but not 100 should be a leap year", ()=>{
        yearText.simulate('change', { target: { value: 2012 } });
        yearButton.simulate('click');
        expect(wrapper.find("label").at(1).text()).toEqual("Is a Leap Year");
    })

    it("Year should be a valid number", ()=>{
        yearText.simulate('change', { target: {value: "year"} });
        yearButton.simulate('click');
        expect(wrapper.find("label").at(1).text()).toEqual("Enter a valid year");
    })

    it("Year should not be a decimal number", ()=>{
        yearText.simulate('change', { target: {value: 2.2} });
        yearButton.simulate('click');
        expect(wrapper.find("label").at(1).text()).toEqual("Enter a valid year");
    })

    it("Year should not be a negative number", ()=>{
        yearText.simulate('change', { target: {value: -1} });
        yearButton.simulate('click');
        expect(wrapper.find("label").at(1).text()).toEqual("Enter a valid year");
    })
}); 