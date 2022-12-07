import React from "react";
import { shallow } from "enzyme";
import Header from "../components/Header";
import App from "../App";
import { findByTestAttr } from "../../Utils";

const setUp = (props = {}) => {
  const component = shallow(<App {...props} />);
  return component;
};

describe("App Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render container", () => {
    // const component = shallow(<App />);
    // const appcomp = component.find(".containerComponent"); ->className
    // const appcomp = component.find(`[data-test='containerComponent']`); //data-test
    const appcomp = findByTestAttr(component, "containerComponent");
    expect(appcomp.length).toBe(1);
  });
});
