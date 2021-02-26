import './App.css';
import PageBanner from './components/PageBanner';
import SearchResultContainer from './components/SearchResultContainer';

function App() {
  return (
    <div className="container">
      <PageBanner />
      <SearchResultContainer />
    </div>
  );
}

export default App;
