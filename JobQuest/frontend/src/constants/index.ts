import { IoBarChartSharp}  from 'react-icons/io5';
import { MdQueryStats, MdAdminPanelSettings }  from 'react-icons/md';
import { FaWpforms }  from 'react-icons/fa';
import { ImProfile }  from 'react-icons/im';

export const navLinks = [
    { title: "Add", path: "add-job", icon: FaWpforms },
    { title: "Jobs", path: "all-jobs", icon: MdQueryStats},
    { title: "Stats", path: "stats", icon: IoBarChartSharp},
    { title: "Profile", path: "profile", icon: ImProfile},
    { title: "Admin", path: "admin", icon: MdAdminPanelSettings},
];