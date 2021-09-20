import { Link } from 'umi';

interface MenuItemRenderProps {
  menuItemProps: any;
  defaultDom: any;
}
export const MenuItemRender: React.FC<MenuItemRenderProps> = (props) => {
  const { menuItemProps, defaultDom } = props;
  if (
    menuItemProps.isUrl ||
    !menuItemProps.path ||
    location.pathname === menuItemProps.path
  ) {
    return defaultDom;
  }
  return <Link to={menuItemProps.path}>{defaultDom}</Link>;
};
