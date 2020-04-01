import React, { Component } from "react";
import { render, fireEvent } from "@testing-library/react";

import Button  from "./button";

// 创建出一个被监听的函数
const onClickFunc = jest.fn();

describe("测试Button组件", () => {
  it("测试button组件的初始状态", () => {
    const wrapper = render(<Button onClick={onClickFunc}>BtnComp</Button>);
    const element = wrapper.getByText("BtnComp");
    // 有没有成功添加至 document 中
    expect(element).toBeInTheDocument();
    // 测试默认渲染是否是button 元素
    expect(element.tagName).toEqual("BUTTON");
    // 是否包含以下类名
    expect(element).toHaveClass("btn btn-type-default");
    // 调用此元素的click事件
    fireEvent.click(element);
    // 是否执行了clickFUNC
    expect(onClickFunc).toHaveBeenCalled();
  });

  it("测试type = link 时 , 渲染出来的是否是 a 标签 ", () => {
    const wrapper = render(
      <Button btnType={'link'} disabled={true}>
        点我
      </Button>
    ); 
    const element = wrapper.getByText("点我");

    // 是否是 a标签
    expect(element.tagName).toEqual("A");
    // 是否包含 btn-type-link
    expect(element).toHaveClass("btn-type-link");
    // 顺便测试一下   link  disabled
    expect(element).toHaveClass("disabled");
  });

  it("测试 默认 button 的 disabled 是否正常 ", () => {
    const wrapper = render(<Button disabled={true}>点我</Button>);
    const element = wrapper.getByText("点我");
    expect(element).toHaveAttribute("disabled");
  });

  it("测试 button 组件的尺寸 是否有用 ", () => {
    const wrapper = render(
      <div>
        <Button size={'lg'}>btn1</Button>
        <Button size={'sm'}>btn2</Button>
      </div>
    );
    const btn1 = wrapper.getByText("btn1");
    const btn2 = wrapper.getByText("btn2");
    expect(btn1).toHaveClass("btn-size-lg");
    expect(btn2).toHaveClass("btn-size-sm");
  });
});
