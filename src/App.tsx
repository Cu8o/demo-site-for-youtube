import './App.css';
import content from './content.json';
import { ContentSection } from './components/ContentSection';
import { SocialLinks } from './components/SocialLinks';
import { RotatingCube } from './components/RotatingCube';
import type { ContentData } from './types/content';

const typedContent = content as ContentData;

function App() {
  const socialLinks = [
    { name: 'Instagram', url: typedContent.landingPage.links.instagram },
    { name: 'Pinterest', url: typedContent.landingPage.links.pinterest },
    { name: 'Youtube', url: typedContent.landingPage.links.youtube },
  ];

  return (
    <div className="page-wrapper">
      <main className="main-content">
        <ContentSection
          title={typedContent.landingPage.title}
          paragraphs={typedContent.landingPage.paragraphs}
        />
        <div className="cube-section">
          <RotatingCube />
        </div>
      </main>
      <footer className="footer">
        <SocialLinks links={socialLinks} />
      </footer>
    </div>
  );
}

export default App;
