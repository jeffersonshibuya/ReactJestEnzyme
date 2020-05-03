import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";

import { findByTestAttr } from "./../../../Utils";

const setUp = (props = {}) => {
  const Component = shallow(<Headline {...props} />);
  return Component;
};

describe("Headline Component", () => {
  describe("Have Props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "Test header",
        desc: "Test description",
      };

      wrapper = setUp(props);
    });

    it("Should render without errors", () => {
      const Component = findByTestAttr(wrapper, "HeadlineComponent");
      expect(Component.length).toBe(1);
    });

    it("Should render a h1", () => {
      const h1 = findByTestAttr(wrapper, "header");
      expect(h1.length).toBe(1);
    });

    it("Should render a desc", () => {
      const desc = findByTestAttr(wrapper, "desc");
      expect(desc.length).toBe(1);
    });
  });

  describe("Have NO Props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it("Should no render", () => {
      const component = findByTestAttr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(0);
    });
  });
});
