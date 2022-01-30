import { routes } from "../routes/index";
import { SidebarItem } from "./SidebarItem";
import "./sidebar.css";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <span className="sidebar-span">MENU</span>
        {routes.map((value) => (
          <SidebarItem key={value.path} name={value.name} path={value.path} />
        ))}
      </ul>
    </div>
  );
};
