import SidebarWrapper from "./SidebarWrapper"
import Link from "next/link";
import sidebarData from "../../../Data/SidebarData";
const Sidebar = () => {
    return (
        <SidebarWrapper>
            <div className="sidebar_header">
                <h4 className="h5">Menu</h4>
            </div>
            <ul>
                {sidebarData.map(v => <li key={v.href}> <Link href={v.href}><a className="sidebar_link">{v.title}</a></Link> </li>)}
            </ul>
        </SidebarWrapper>
    )
}

export default Sidebar;
