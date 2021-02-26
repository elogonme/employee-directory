import './App.css';
import PageBanner from './components/PageBanner';
import SearchResultContainer from './components/SearchResultContainer';

function App() {
  return (
    <div>
      <PageBanner />
      <div className="container">
        <SearchResultContainer />
      </div>
      
    </div>
  );
}

export default App;
