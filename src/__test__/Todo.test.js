import React from "react";
import { shallow, mount } from "enzyme";
import Todo from "../Todo";

describe("Todo", () => {
  it("renders", () => {
    shallow(<Todo />);
  });
});
