export type HeaderProps = {
    /**
     * Function to handle sidebar toggle, used on hamburger onClick
     */
    onSidebarToggle: () => void;

    /**
     * Checks whether sidebar is open or closed
     */
    isSidebarOpen: boolean;
};
