import { MdOutlineGridView } from "react-icons/md";
import { MdOutlineAccountTree } from "react-icons/md";
import { MdOutlineAccountBalance } from "react-icons/md";
import { LuChartNoAxesCombined } from "react-icons/lu";

export const navItems = [
  {
    name: "Dashboard",
    icon: <MdOutlineGridView />,
    to: "/dashboard",
  },
  {
    name: "Approval Workflow",
    icon: <MdOutlineAccountTree />,
    to: "/approval-workflow",
  },
  {
    name: "Budget room",
    icon: <MdOutlineAccountBalance />,
    to: "/budget-room",
  },
  {
    name: "Analytics",
    icon: <LuChartNoAxesCombined />,
    to: "/analytics",
  },
];
