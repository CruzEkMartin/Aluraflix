
import cardImg from '../assets/thumbnails/frontend1.jpg'

export const Banner = () => {
    return (
        <div className='container'>
            <div className='container-overlay'>
                <div className='container-contenido'>
                    <div className='container-contenido-info'>
                        <h1 className='container-contenido-titulo'>Front End</h1>
                        <h3 className='container-contenido-subtitulo'>Challenge React</h3>
                        <p className='container-contenido-texto'>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
                    </div>
                    <div className="container-card">
                        <img src={cardImg} className='container-card-img'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
