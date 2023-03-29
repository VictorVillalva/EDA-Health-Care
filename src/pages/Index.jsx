//Hooks
//Components
import Header from '../components/Header';
import Footer from '../components/Footer';
//Image
import doc from '../assets/Images/fotoMedica.svg';
import why from '../assets/Images/fotoExample.svg';
import emer from '../assets/Images/fotoExample2.svg';
//CSS
import '../assets/Styles/index.css';


const Index = () => {

  return (
    <>
    <section className='headerIndex'>
      <div className="container">
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <div className="col-6">
            <img src={doc} alt="" id='imageIndexConfi'/>
          </div>
          <div className="col-6 information">
            <span className='title-index'>TU SALUD SIEMPRE ES</span>
            <span className='title-index'>NUESTRA NECESIDAD</span>
            <p className='description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ratione explicabo magnam, fuga delectus in eveniet aut libero praesentium pariatur excepturi quis sapiente nisi, aspernatur voluptates soluta ullam, ipsa omnis?</p>
            <a href="/admin">
              <button className='button-index'>Iniciar</button>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className='mainIndex'>
        <div className="container">
          <div className="row why1">
            <div className="col-6">
              <img src={why} alt="" id='image-main' />
            </div>
            <div className="col-1"></div>
            <div className="col-4">
              <span className='information-1'>¿Por que es importante revisarse?</span>
              <p className='information-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dicta vitae omnis quisquam exercitationem rem culpa at, explicabo possimus tenetur, non magnam aliquam labore, error eveniet laudantium voluptas aperiam enim.</p>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
    </section>
    <section className='mainIndex2'>
      <div className="container">
        <div className="row emergency">
          <div className="col-1"></div>
          <div className="col-4 emergencyInfo">
            <span className='information-3'>¿Que hacer en caso de emergencia?</span>
            <p className='information-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat dolore eaque est! Et placeat eligendi delectus voluptatem quaerat accusamus quis. Dolorum quo quas quae vitae rem expedita ad a maxime!</p>
          </div>
          <div className="col-7">
            <img src={emer} alt="" id='imageIndex2'/>
          </div>
        </div>
      </div>
    </section>
    <section className='footerIndex'>
        <div className="container">
          <div className="row footerCenter">
            <Footer />
          </div>
        </div>
    </section>
    </>
  )
}

export default Index;
