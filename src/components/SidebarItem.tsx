import React from "react";
import { Link } from "react-router-dom";

interface sidebarItemProps {
  name: string;
  path: string;
}

export const SidebarItem = ({ name, path }: sidebarItemProps) => {
  return (
    <Link to={path}>
      <span>{name}</span>
    </Link>
  );
};
