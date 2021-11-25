import cartas from '../data/objetcSakura'
import './cards.css'

const Cards = () => {
  return(
    <div className="flex-center">
      <section className="container-cartas">
        {cartas.map(carta => 
          <div key={carta._id} className="dados-carta">
          <h2 className="titulo-carta">{carta.englishName}</h2>
          <img className="imagem-carta" src={carta.clowCard} alt={carta.englishName} />
          <h2 className="texto-carta">{carta.meaning}</h2>
          </div>
        )}
      </section>
    </div>
  )

}

export default Cards