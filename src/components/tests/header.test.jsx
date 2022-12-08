import React from "react";
import { shallow } from "enzyme";
import Header from "../Header";
import { findByTestAttr } from "../../../Utils";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("AppBar- should render without errors", () => {
    // const component = shallow(<Header />);
    // const component = setUp();
    //   console.log(component.debug());
    // const wrapper = component.find(".appbarComp"); ->className
    //const wrapper = component.find(`[data-test='appbarComp']`); //data-test
    const wrapper = findByTestAttr(component, "appbarComp");
    expect(wrapper.length).toBe(1);
  });

  it("Logo- should render without errors", () => {
    // const component = setUp();
    // const logo = component.find(".logoComp"); -> className
    // const logo = component.find(`[data-test='logoComp']`); //data-test
    const logo = findByTestAttr(component, "logoComp");
    expect(logo.length).toBe(1);
  });
});
