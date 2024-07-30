import financeIcon from "../../../assets/images/sitemenu/finance/account-line.svg";
import dashboardIcon from "../../../assets/images/sitemenu/finance/dashboard.svg";
import accounts from "../../../assets/images/sitemenu/finance/people.svg";
import usersIcon from "../../../assets/images/sitemenu/finance/hrm-line.svg";
import usersMiniIcon from "../../../assets/images/sitemenu/Users/people.svg";
import contactIcon from "../../../assets/images/sitemenu/contact/contacts.svg";
import reportsIcon from "../../../assets/images/common/reports.svg";

 const menuArr = [
  {
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
        iconL: accounts,
        iconF: accounts,
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
        iconF: usersMiniIcon,
        iconL: usersMiniIcon,
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
    id: "contacts",
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
        iconL: usersMiniIcon,
        iconF: usersMiniIcon,
      },
      {
        id: "contacts/hosting",
        title: "Hosting",
        iconL: usersMiniIcon,
        iconF: usersMiniIcon,
      },
      {
        id: "contacts/reports",
        title: "Reports",
        iconL: reportsIcon,
        iconF: reportsIcon,
      },
    ],
  },
];

export default menuArr;