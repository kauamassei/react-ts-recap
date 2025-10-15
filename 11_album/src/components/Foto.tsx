import React from 'react'

interface FotoProps {
  dados: {
    url: {
      small: string
    },
    alt_description: string
  }
}

const Foto: React.FC<FotoProps> = ({ dados }) => {
  return (
    <>
      <div>
        <img src={dados.url.small} alt={dados.alt_description} />
      </div>
    </>
  )
}


export default Foto