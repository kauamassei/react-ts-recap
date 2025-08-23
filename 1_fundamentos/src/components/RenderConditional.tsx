interface propsRender {
    user: string,
}

const RenderConditional = ({user}: propsRender) => {
  return (
    <>
    <div>{user && <h1>bem vindo de volta {user}</h1>}</div>
    </>
  )
}

export default RenderConditional