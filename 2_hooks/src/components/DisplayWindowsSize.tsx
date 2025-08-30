import useWindowsSize from "../hooks/UseWindowSize";


const DisplayWindowsSize = () => {
    const {width, height} = useWindowsSize();
  return (
    <><div>
        <p>A largura da janela é: {width}</p>
        <p>A altura da janela é: {height}</p>
    </div>
    </>
  )
}

export default DisplayWindowsSize