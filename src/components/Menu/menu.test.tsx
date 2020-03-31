import React, { Component } from "react";
import { render, fireEvent , cleanup , RenderResult } from "@testing-library/react";
import Menu, { IMenuProps } from "./menu";
import MenuItem from "./item";
import SubMenu ,{ ISubMenuProps } from './subMenu' 

const defaultMenuProps: IMenuProps = {
  onSelect: jest.fn(), 
  className: 'test-class'
};
const modeHovMenuProps: IMenuProps = {
  mode: "horizontal",
  onSelect: jest.fn()
};

let wrapper:RenderResult ,
  container: HTMLElement,
  activeElement: HTMLElement,
  disabeldElement: HTMLElement,
  otherElement: HTMLElement;


  const renderComponent =(props:IMenuProps) =>{
    wrapper = render(
        <Menu {...props}>
          <MenuItem>Default</MenuItem>
          <MenuItem>Other</MenuItem>
          <MenuItem disabled={true}>Disabled</MenuItem>
          <SubMenu title="childNav">
            <MenuItem>submen1</MenuItem>
            <MenuItem>submen2</MenuItem>
          </SubMenu>
        </Menu>
      );
      container = wrapper.getByTestId("test-menu");
      activeElement = wrapper.getByText("Default");
      otherElement = wrapper.getByText("Other");
      disabeldElement = wrapper.getByText("Disabled");
  }
describe("测试 导航组件 的用例", () => {
  beforeEach(() => {
    renderComponent(defaultMenuProps)
  });

  it("测试 menu组件能否正常使用", () => {
    expect(container).toBeInTheDocument()
    // 子节点是否只有3 
    expect(container.querySelectorAll(':scope > li').length).toEqual(4);
    // 最外层dom 是否拥有 自定义class ,以及默认 class 
    expect(container).toHaveClass('test-class menu')
    // 判断是否拥有 activeClass 
    expect(activeElement).toHaveClass('active') 
    // disabled  class 是否正常  
    expect(disabeldElement).toHaveClass('disabled')
  });
  it("测试menu 组件 是否能执行交互方法 default=可以交互， disabeld 不行  ", () => {
    
    fireEvent.click(otherElement)
    // 是不是从第一项出发的 
    expect(defaultMenuProps.onSelect).toHaveBeenCalledWith('1')
    expect(activeElement).not.toHaveClass('active')
    fireEvent.click(disabeldElement)
    expect(disabeldElement).not.toHaveClass('active')
    // 不是第二项触发的 
    expect(defaultMenuProps.onSelect).not.toHaveBeenCalledWith('2')
  });

  it("测试menu 组件的 mode 属性是否生效", () => {
    cleanup()  
    renderComponent(modeHovMenuProps)
    // 水平的类名是否生效 
    expect(container).toHaveClass('menu-horizontal')

  });

  it('测试子导航的 展开功能是否可以正常使用 SubMenu (模式 = 水平)' , async  () => {
      const subTag = wrapper.getByText('submen1') 
      // 鼠标移入, 判断子节点是否显示 
      fireEvent.mouseEnter(subTag)
      await await(() => {
        expect(subTag).toBeVisible()
      })
      fireEvent.mouseLeave(subTag)
      await await(() => {
        expect(subTag).not.toBeVisible()
      })
  })


  it(' 同上(模式 = 垂直) defaultOpenSubMenus 参数 ' , async  () => {
    cleanup()
    renderComponent({ mode : 'vertical' , defaultOpenSubMenus : ['3'] })
    const subTag = wrapper.getByText('submen1')
    // 默认是否可见
    expect(subTag).toBeVisible()

  })
});
