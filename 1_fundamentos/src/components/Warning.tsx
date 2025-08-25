interface warningProps {
    warning: string
}


const Warning = ({warning}: warningProps) => {
    if(!warning) {
        return null
    }
    
  return <p>Aviso!</p>
}

export default Warning