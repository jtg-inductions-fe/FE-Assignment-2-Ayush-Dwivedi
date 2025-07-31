//Temporary placeholder for sidebar
interface SidebarProps {
    open: boolean;
}

export const Sidebar = ({ open }: SidebarProps) => (
    <p>{`Sidebar opened: ${open}`}</p>
);
