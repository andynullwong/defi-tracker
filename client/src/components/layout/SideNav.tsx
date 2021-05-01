import { useDispatch, useSelector } from "react-redux";
import { Menu } from "antd";
import {
  DashboardOutlined,
  DollarCircleOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { MenuType } from "../../types/layout/layout.types";
import { selectMenu, setMenu } from "../../store/layout/slice";

const { Item } = Menu;

const SideNav = () => {
  const menu = useSelector(selectMenu);
  const dispatch = useDispatch();

  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={[menu]}>
      <Item
        key="dashboard"
        icon={<DashboardOutlined />}
        onClick={() => dispatch(setMenu(MenuType.Dashboard))}
      >
        Dashboard
      </Item>
      <Item
        key="payments"
        icon={<DollarCircleOutlined />}
        onClick={() => dispatch(setMenu(MenuType.Payments))}
      >
        Payments
      </Item>
      <Item
        key="settings"
        icon={<SettingOutlined />}
        onClick={() => dispatch(setMenu(MenuType.Settings))}
      >
        Settings
      </Item>
    </Menu>
  );
};

export default SideNav;
