import './App.css';
import content from './content.json';

function App() {
  return (
    <div className="page-wrapper">
      <main className="main-content">
        <h1>{content.landingPage.title}</h1>
        <p>{content.landingPage.paragraphs.greeting}</p>
        <p>{content.landingPage.paragraphs.professional}</p>
        <p>{content.landingPage.paragraphs.passions}</p>
        <p>{content.landingPage.paragraphs.philosophy}</p>
      </main>
      <footer className="footer">
        <div className="footer-links">
          <p>Relevant links:</p>
          <a href={content.landingPage.links.instagram}>Instagram</a>
          <a href={content.landingPage.links.pinterest}>Pinterest</a>
          <a href={content.landingPage.links.youtube}>Youtube</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
