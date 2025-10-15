import Foto from "./Foto"

type FotoListProps = {
  foto: {
    
  }
}

const FotoList = ({foto}: FotoListProps) => {
  return (
    <>
    <div className="album">
      {foto.map((foto) => (
        <Foto />
      ))}
    </div>
    </>
  )
}

export default FotoList