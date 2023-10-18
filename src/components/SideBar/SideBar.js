
 const SideBar = ({isVisible}) => {
    return (
        <>
    {isVisible && <div className="SideBar-wrapper">
        
        <div className="SideBar-overlay"></div>
        <div className="SideBar"></div>
    </div>}
        </>
        
    )
};

export default SideBar;