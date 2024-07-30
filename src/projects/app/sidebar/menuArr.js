import financeIcon from "../../../assets/images/sitemenu/finance/account-line.svg";
import dashboardIcon from "../../../assets/images/sitemenu/finance/dashboard.svg";
import accounts from "../../../assets/images/sitemenu/finance/people.svg";
import usersIcon from "../../../assets/images/sitemenu/finance/hrm-line.svg";
import usersMiniIcon from "../../../assets/images/sitemenu/Users/people.svg";
import contactIcon from "../../../assets/images/sitemenu/contact/contacts.svg";
import reportsIcon from "../../../assets/images/common/reports.svg";
import imageFill from "../../../assets/images/common/img-active.svg";
import dashboardLine from '../../../assets/images/common/dashboard-line.svg'

 const menuArr = [
  {
    id: "finance",
    miniTitle: "F&A",
    title: "Finance & Account",
    iconFill: imageFill,
    iconLine: financeIcon,
    subMenu: [
      {
        id: "finance/dashboard",
        title: "Dashboard",
        iconL: dashboardLine,
        iconF: dashboardIcon,
      },
      {
        id: "finance/accounts",
        title: "Accountsssss",
        iconL: accounts,
        iconF: imageFill,
      },
      {
        id: "finance/transactions",
        title: "Transaction",
        iconL: accounts,
        iconF: imageFill,
      },
      {
        id: "finance/reports",
        title: "Reports",
        iconL: accounts,
        iconF: imageFill,
      },
    ],
  },
  {
    id: "users",
    miniTitle: "USERS",
    title: "USERS",
    iconFill: imageFill,
    iconLine: usersIcon,
    subMenu: [
      {
        id: "users/dashboard",
        title: "Dashboard",
        iconL: dashboardIcon,
        iconF: imageFill,
      },
      {
        id: "users/list",
        title: "Users",
        iconF: imageFill,
        iconL: usersMiniIcon,
      },
      {
        id: "users/reports",
        title: "Reports",
        iconF: imageFill,
        iconL: usersMiniIcon,
      },
      {
        id: "users/projects",
        title: "Projects",
        iconF: imageFill,
        iconL: usersMiniIcon,
      },
    ],
  },
  {
    id: "contacts",
    miniTitle: "CONTACTS",
    title: "CONTACTS",
    iconFill: imageFill,
    iconLine: contactIcon,
    subMenu: [
      {
        id: "contacts/dashboard",
        title: "Dashboard",
        iconL: dashboardIcon,
        iconF: imageFill,
      },
      {
        id: "contacts/domain",
        title: "Domain",
        iconL: usersMiniIcon,
        iconF: imageFill,
      },
      {
        id: "contacts/hosting",
        title: "Hosting",
        iconL: usersMiniIcon,
        iconF: imageFill,
      },
      {
        id: "contacts/reports",
        title: "Reports",
        iconL: reportsIcon,
        iconF: imageFill,
      },
    ],
  },
];

export default menuArr;