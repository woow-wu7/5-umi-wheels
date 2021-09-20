import {
  Logout,
  ErrorComponent,
  GlobalHeaderRight,
  MenuItemRender,
} from '@/component/Layout';
import { MenuDataItem } from '_@ant-design_pro-layout@6.24.3@@ant-design/pro-layout';

export const menuItemRender = (
  menuItemProps: MenuDataItem & {
    isUrl: boolean;
    onClick: () => void;
  },
  defaultDom: React.ReactNode,
) => <MenuItemRender menuItemProps={menuItemProps} defaultDom={defaultDom} />;

export const errorComponent = (error: Error) => (
  <ErrorComponent error={error} />
);

export const logout = () => <Logout />;

export const rightContentRender = () => <GlobalHeaderRight />;
