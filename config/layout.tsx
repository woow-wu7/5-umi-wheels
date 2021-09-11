import React from 'react';
import { Link } from 'umi';
import {
  BasicLayoutProps,
  Settings as LayoutSettings,
} from '@ant-design/pro-layout';
import { BaseMenuProps } from '_@ant-design_pro-layout@6.24.3@@ant-design/pro-layout/lib/components/SiderMenu/BaseMenu';

interface LayoutProps extends BasicLayoutProps {
  logout: () => void;
  ErrorComponent: (error: Error) => React.ReactElement<any>;
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
    title: 'umi-数字滚动',
    navTheme: 'light', // 'light' | 'dark'
    layout: 'mix', // 'side' | 'top' | 'mix'
    headerTheme: 'light', // 顶部导航的主题，mix 模式生效
    fixSiderbar: true,
    locale: 'zh-CN',
    // loading: true,
    // menuHeaderRender, // 渲染logo和title，这里我们已经指定了title和layout='mix'，所以顶部已经有了和menuHeader类似的组件效果
    menuItemRender,
    logout,
    ErrorComponent,
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

const ErrorComponent = (error: Error) => <p>发生错误: {error}</p>;
