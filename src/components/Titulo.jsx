import './titulo.css'

const Titulo = ({ titulo, subtitulo, imagem }) => {
  return (
    <div className="container-titulo">
      <img
        className="container-imagem"
        src={ imagem }
        alt="Sakura logo"
      />
      <h1>{ titulo }</h1>
      <p>{ subtitulo }</p>
    </div>
  )
}

export default Titulo
