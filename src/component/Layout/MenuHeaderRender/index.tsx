import React from 'react';

interface MenuHeaderRenderProps {
  logo: React.ReactNode;
  title: React.ReactNode;
}

export const MenuHeaderRender: React.FC<MenuHeaderRenderProps> = (props) => {
  const { logo = '', title = '' } = props;
  return (
    <div
      id="customize_menu_header"
      onClick={() => {
        window.open('https://github.com/woow-wu7');
      }}
      style={{ display: 'flex', alignContent: 'center' }}
    >
      {logo}
      {title}
    </div>
  );
};
