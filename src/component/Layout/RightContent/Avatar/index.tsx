import React, { useCallback } from 'react';
import {
  LogoutOutlined,
  SettingOutlined,
  AntDesignOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Menu, Dropdown } from 'antd';
import styles from './index.less';
import type { MenuInfo } from 'rc-menu/lib/interface';

export type GlobalHeaderRightProps = {
  menu?: boolean;
};

/**
 * 退出登录，并且将当前的 url 保存
 */
const loginOut = async () => {};

const AvatarDropdown: React.FC<GlobalHeaderRightProps> = ({ menu }) => {
  const onMenuClick = useCallback((event: MenuInfo) => {}, []);

  const menuHeaderDropdown = (
    <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick}>
      <Menu.Item key="center">
        <UserOutlined />
        个人中心
      </Menu.Item>
      <Menu.Item key="settings">
        <SettingOutlined />
        个人设置
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout">
        <LogoutOutlined />
        退出登录
      </Menu.Item>
    </Menu>
  );
  return (
    <HeaderDropdown overlay={menuHeaderDropdown}>
      <span className={`${styles.action} ${styles.account}`}>
        <Avatar
          style={{
            backgroundColor: '#1890ff',
            marginRight: '10px',
            cursor: 'pointer',
          }}
          icon={<AntDesignOutlined />}
          size="small"
        />
        <span className={styles.name}>woow_wu7</span>
      </span>
    </HeaderDropdown>
  );
};

const HeaderDropdown: React.FC<any> = ({
  overlayClassName: cls,
  ...restProps
}) => <Dropdown {...restProps} />;

export default AvatarDropdown;
