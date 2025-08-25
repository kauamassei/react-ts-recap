interface propsBtn {
    isLoggedIn: boolean
}

const LoginButton = ({isLoggedIn}: propsBtn) => {
  return (
    <>
    <div>{isLoggedIn? <button>Sair</button> : <button>Entrar</button>}</div>
    </>
  )
}

export default LoginButton