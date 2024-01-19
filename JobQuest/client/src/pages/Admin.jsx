import useMediaQuery from "@/hooks/useMediaQuery"
const Admin = () => {
  const isMobileScreen = useMediaQuery("(min-width: 1000px)")
  
  return (
    <div className={`${isMobileScreen ? 'grid-layout' : 'grid-layout-small-screen '} px-8 pt-4`}>
      <div className="a bg-white">Admin</div>
      <div className="b bg-white">Admin</div>
      <div className="c bg-white">Admin</div>
      <div className="d bg-white">Admin</div>
      <div className="e bg-white">Admin</div>
      <div className="f bg-white">Admin</div>
    </div>
  )
}

export default Admin