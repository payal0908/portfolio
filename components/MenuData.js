import { Menu } from "antd";

export const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a href="#hero">
            Home
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a href="#about">
            About
          </a>
        ),
      },
      {
        key: '3',
        label: (
          <a href="#skills">
            Skills
          </a>
        ),
      },
      {
        key: '4',
        label: (
          <a href="#workexp">
            Experience
          </a>
        ),
        
      },
      {
        key: '5',
        label: (
          <a href="#projects">
            Projects
          </a>
        ),
      },
    ]}
  />
);
