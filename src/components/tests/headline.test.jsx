import React from "react";
import { shallow } from "enzyme";
import Headline from "../Headline";
import { findByTestAttr } from "../../../Utils";
import { IsoTwoTone } from "@material-ui/icons";

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline Component", () => {
  describe("Have props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test Desc",
      };
      wrapper = setUp(props);
    });
    it("should render w/o errors ", () => {
      const comp = findByTestAttr(wrapper, "headlineComp");
      expect(comp.length).toBe(1);
    });

    it("should render Header ", () => {
      const h1 = findByTestAttr(wrapper, "header");
      expect(h1.length).toBe(1);
    });
    it("should render Description ", () => {
      const des = findByTestAttr(wrapper, "desc");
      expect(des.length).toBe(1);
    });
  });

  describe("Have No Props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();

      it("should not render", () => {
        const comp = findByTestAttr(wrapper, "headlineComp");
        expect(des.length).toBe(0);
      });
    });
  });
});
