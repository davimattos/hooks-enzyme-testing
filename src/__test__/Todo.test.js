import React from "react";
import { shallow, mount } from "enzyme";
import Todo from "../Todo";

describe("Todo", () => {
  it("renders", () => {
    shallow(<Todo />);
  });

  it("display initial to-dos", () => {
    const wrapper = mount(<Todo />);
    expect(wrapper.find("li")).toHaveLength(2);
  });
});
