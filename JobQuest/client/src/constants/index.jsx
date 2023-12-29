import { IoBarChartSharp}  from 'react-icons/io5';
import { MdQueryStats, MdAdminPanelSettings }  from 'react-icons/md';
import { FaWpforms }  from 'react-icons/fa';
import { ImProfile }  from 'react-icons/im';

export const navLinks = [
    { title: "add job", path: ".", icon: <FaWpforms/> },
    { title: "all jobs", path: "all-jobs", icon: <MdQueryStats/> },
    { title: "stats", path: "stats", icon: <IoBarChartSharp/>},
    { title: "profile", path: "profile", icon: <ImProfile/> },
    { title: "admin", path: "admin", icon: <MdAdminPanelSettings/> },
];