import financeIcon from "../../assets/images/sitemenu/finance/account-line.svg";
import dashboardIcon from "../../assets/images/sitemenu/finance/dashboard.svg";
import accounts from "../../assets/images/sitemenu/finance/people.svg";
import usersIcon from "../../assets/images/sitemenu/finance/hrm-line.svg";
import usersMiniIcon from "../../assets/images/sitemenu/Users/people.svg";

const menuArr = [
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
      iconFill: usersIcon,
      iconLine: usersIcon,
      subMenu: [
        {
          id: "contact/dashboard",
          title: "Dashboard",
          iconL: dashboardIcon,
          iconF: dashboardIcon,
        },
        {
          id: "contact/domain",
          title: "Domain",
          iconF: usersMiniIcon,
          iconL: usersMiniIcon,
        },
        {
          id: "contact/hosting",
          title: "Hosting",
          iconF: usersMiniIcon,
          iconL: usersMiniIcon,
        },
        {
          id: "contact/reports",
          title: "Reports",
          iconF: usersMiniIcon,
          iconL: usersMiniIcon,
        },
      ],
    },
  ];

  export default menuArr