import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "./../../../Utils";
import Header from "./index";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render without errors", () => {
    console.log(component.debug());
    const wrapper = findByTestAttr(component, "headerComponent");
    expect(wrapper.length).toBe(1);
  });

  it("should not render without logo", () => {
    const logo = findByTestAttr(component, "logoIMG");
    expect(logo.length).toBe(1);
  });
});
