import './App.css';
import content from './content.json';

function App() {

  return (
    <>
      <div>
      </div>
      <h1>{content.landingPage.title}</h1>
      <div className="paragraphs-container">
        <p>{content.landingPage.paragraphs.greeting}</p>
        <p>{content.landingPage.paragraphs.professional}</p>
        <p>{content.landingPage.paragraphs.passions}</p>
        <p>{content.landingPage.paragraphs.philosophy}</p>
      </div>
      
      <footer className='footer'>
        <p>Relevant links, if you're interested</p>
        <div className='footer-links'>
          <a href={content.landingPage.links.instagram}>Instagram</a>
          <a href={content.landingPage.links.pinterest}>Pinterest</a>
          <a href={content.landingPage.links.youtube}>Youtube</a>
        </div>
      </footer>
    </>
  );
}

export default App;
