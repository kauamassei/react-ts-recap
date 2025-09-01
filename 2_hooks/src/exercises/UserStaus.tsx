import useOnlineStatus from "./useStatus"


const UserStaus = () => {
    const isOnline = useOnlineStatus
  return (
    <><p>Você está atualmente: {isOnline() ? 'Online' : 'Offline'}</p>
    </>
  )
}

export default UserStaus