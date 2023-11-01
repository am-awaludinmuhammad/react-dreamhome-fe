import Faq from './components/Faq';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import NavigationBar from './components/NavigationBar';
import Service from './components/Service';
import data from './data.json';

function App() { 
  const { galleries, services, faqs, footers } = data;
  
  return (
    <>
      <NavigationBar />
      <Hero />
      <Gallery data={galleries}/>
      <Service data={services}/>
      <Faq data={faqs}/>
      <Footer data={footers} />
    </>
  );
}

export default App;
