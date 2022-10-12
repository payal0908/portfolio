import { Menu } from "antd";

export const menu = (
  <Menu style={{borderRadius: 12, textAlign: 'center', backgroundColor: "#"}}
    items={[
      {
        key: '1',
        label: (
          <a className="text-xs sm:text-sm tracking-widest uppercase" href="#hero">
            Home
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a className="text-xs sm:text-sm tracking-widest uppercase" href="#about">
            About
          </a>
        ),
      },
      {
        key: '3',
        label: (
          <a className="text-xs sm:text-sm tracking-widest uppercase" href="#skills">
            Skills
          </a>
        ),
      },
      {
        key: '4',
        label: (
          <a className="text-xs sm:text-sm tracking-widest uppercase" href="#workexp">
            Experience
          </a>
        ),
        
      },
      {
        key: '5',
        label: (
          <a className="text-xs sm:text-sm tracking-widest uppercase" href="#projects">
            Projects
          </a>
        ),
      },
    ]}
  />
);
