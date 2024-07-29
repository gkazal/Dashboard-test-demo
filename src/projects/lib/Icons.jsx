import financeIcon from "../../assets/images/sitemenu/finance/account-line.svg";
import dashboardIcon from "../../assets/images/sitemenu/finance/dashboard-fill.svg";
import accounts from "../../assets/images/sitemenu/finance/people.svg";
import usersIcon from "../../assets/images/sitemenu/finance/hrm-line.svg";
import usersMiniIcon from "../../assets/images/sitemenu/Users/people.svg";
import contactIcon from "../../assets/images/sitemenu/contact/contacts.svg";
import reportsIcon from "../../assets/images/common/reports.svg";


export const menuArr = [
  {
    // id: 1, title: "Account", iconD: accountIcon, iconA: accountIcon,
    id: "finance",
    miniTitle: "F&A",
    title: "Finance & Account",
    iconFill: financeIcon,
    iconLine: financeIcon,
    subMenu: [
      {
        id: "finance/dashboard",
        title: "Dashboard",
        iconL: dashboardIcon,
        iconF: dashboardIcon,
      },
      {
        id: "finance/accounts",
        title: "Accountsssss",
        iconL: accounts,
        iconF: accounts,
      },
      {
        id: "finance/transactions",
        title: "Transaction",
        iconL: accounts,
        iconF: accounts,
      },
      {
        id: "finance/reports",
        title: "Reports",
        iconL: reportsIcon,
        iconF: reportsIcon,
      },
    ],
  },
  {
    id: "users",
    miniTitle: "USERS",
    title: "USERS",
    iconFill: usersIcon,
    iconLine: usersIcon,
    subMenu: [
      {
        id: "users/dashboard",
        title: "Dashboard",
        iconL: dashboardIcon,
        iconF: dashboardIcon,
      },
      {
        id: "users/list",
        title: "Users",
        iconF: usersMiniIcon,
        iconL: usersMiniIcon,
      },
      {
        id: "users/reports",
        title: "Reports",
        iconF: reportsIcon,
        iconL: reportsIcon,
      },
      {
        id: "users/projects",
        title: "Projects",
        iconF: usersMiniIcon,
        iconL: usersMiniIcon,
      },
    ],
  },
  {
    id: "CONTACTS",
    miniTitle: "CONTACTS",
    title: "CONTACTS",
    iconFill: contactIcon,
    iconLine: contactIcon,
    subMenu: [
      {
        id: "contacts/dashboard",
        title: "Dashboard",
        iconL: dashboardIcon,
        iconF: dashboardIcon,
      },
      {
        id: "contacts/domain",
        title: "Domain",
        iconF: usersMiniIcon,
        iconL: usersMiniIcon,
      },
      {
        id: "contacts/hosting",
        title: "Hosting",
        iconF: usersMiniIcon,
        iconL: usersMiniIcon,
      },
      {
        id: "contacts/reports",
        title: "Reports",
        iconF: reportsIcon,
        iconL: reportsIcon,
      },
      
    ],
  },
  
  
];
