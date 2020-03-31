import React, { Component } from "react";
import { render, fireEvent, RenderResult, cleanup } from "@testing-library/react";

import Badge, { IBadgeProps } from "./badge";

let wrapper: RenderResult,
  childenComp: HTMLElement,
  pointElement: HTMLElement,
  numbersElment: HTMLElement;

const renderTestingComp = (props: IBadgeProps) => {
  return (
    <Badge {...props}>
      <div
        style={{
          width: "50px",
          height: "50px",
          background: "white",
          borderRadius: "25px"
        }}
      >
        test
      </div>
    </Badge>
  );
};

describe("测试标记组件", () => {
  beforeEach(() => {
    wrapper = render(renderTestingComp({}));
    childenComp = wrapper.getByText("test");
    pointElement = wrapper.container.querySelector(".point") as HTMLElement;
  });
  it("测试 默认 badge 子元素是否显示 , badge 组件是否能正常使用", () => {
    expect(pointElement).toBeVisible();
    expect(childenComp).toBeVisible();
  });

  it('测试 带 value 的 badge 是否能照常显示  value > max  显示 n + ' , () =>{
      cleanup() 
      wrapper = render(renderTestingComp({ value : '100'  , max :99 , hidden : false }))
      numbersElment =  wrapper.container.querySelector('.point') as HTMLElement
      // 确认组件可见并且显示为 99 + 
      expect(numbersElment).toBeVisible()
      expect(numbersElment.innerHTML.trim()).toEqual('99+')
  })

  it('该组件是否可以隐藏' , () => {
    cleanup() 
    wrapper = render(renderTestingComp({ value : '100'  , max :99 , hidden : true }))
    numbersElment =  wrapper.container.querySelector('.point') as HTMLElement
    // 该元素将不被生成
    expect(numbersElment).toBeNull()
  })
});
