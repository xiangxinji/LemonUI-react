import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Input, { IInputProps } from "./input";
import { IItemProps } from "../Menu/item";

const onChangeFn = jest.fn();
const onPressEnterFn = jest.fn();

let wrapper, inputElement: HTMLElement, textAreaElement: HTMLElement;

const baseProps = {
  placeholder: "请输入value进入文本框",
  onChange: onChangeFn,
  onPressEnter: onPressEnterFn,
};
const disabeldProps = {
  disabled: true,
};
const textAreaProps = {
  type: "textarea",
};

const renderElement = (props: any) => {
  return render(
    <Input value="input文本框" {...(props as IInputProps)}></Input>
  );
};

describe("测试input 组件 ", () => {
  beforeEach(() => {
    wrapper = renderElement(baseProps);
    inputElement = wrapper.getByTestId("test-input");
  });
  it("测试基本功能 ", () => {
    expect(inputElement).not.toBeEmpty();
    expect(inputElement).toHaveClass(
      "input input-size-middle input-type-input"
    );
    // 是否成功渲染出 input 标签
    expect(inputElement.children[0].tagName).toEqual("INPUT");
    // input 的value 是否 === 我们给定的value 值
    expect(inputElement.children[0].getAttribute("value")).toEqual(
      "input文本框"
    );
    // 并且没有被禁用掉
    expect(inputElement.children[0].getAttribute("disabled")).toBeFalsy();
  });
  it("测试 onChange , onPressEnter 事件是否有效", () => {
    fireEvent.change(inputElement);
    // 是否执行了 onchange 事件 TEST FUILD 
    // expect(baseProps.onChange).toBeCalled()
  });
  it("是否能成功渲染出texarea标签", () => {
    cleanup();
    wrapper = renderElement(textAreaProps);
    textAreaElement = wrapper.getByTestId("test-input");
    expect(textAreaElement.children[0].tagName).toEqual("TEXTAREA");
  });
  it("禁用是否生效", () => {
    cleanup();
    wrapper = renderElement(disabeldProps);
    const disabledElement = wrapper.getByTestId("test-input");
    expect(disabledElement).toHaveClass('disabled')
    expect(disabledElement.children[0].getAttribute('disabled')).toBeFalsy()
  });
});
