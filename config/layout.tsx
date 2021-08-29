import React from 'react';
import { Link } from 'umi';
import {
  BasicLayoutProps,
  Settings as LayoutSettings,
} from '@ant-design/pro-layout';
import { BaseMenuProps } from '_@ant-design_pro-layout@6.24.3@@ant-design/pro-layout/lib/components/SiderMenu/BaseMenu';

interface LayoutProps extends BasicLayoutProps {
  logout: () => void;
}

// layout
// - 分类 ( 运行时配置 ) 和 ( 构建时配置 )，这里是运行时配置
// - 运行是配置，具体请查看 config/config.js 文件
// - 在 ( src/app.tsx ) 中引入
export const layout = ({
  // 运行时配置
  initialState,
}: {
  initialState: { settings?: LayoutSettings };
}): LayoutProps => {
  return {
    ...initialState?.settings,
    menuHeaderRender,
    menuItemRender,
    logout,
  };
};

const menuHeaderRender = (logo: React.ReactNode, title: React.ReactNode) => (
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

const menuItemRender: BaseMenuProps['menuItemRender'] = (
  menuItemProps,
  defaultDom,
) => {
  if (
    menuItemProps.isUrl ||
    !menuItemProps.path ||
    location.pathname === menuItemProps.path
  ) {
    return defaultDom;
  }
  return <Link to={menuItemProps.path}>{defaultDom}</Link>;
};

const logout = () => {
  console.log('Log out successfully');
};
