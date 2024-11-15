import { MdDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";

const routes = [
    {
        url:'/',
        label:"Dashboard",
        icon:<MdDashboard size={22} />
    },
    {
        url:'/users',
        label:"Users",
        icon:<FaUsers size={22} />
    }
]

export default routes;