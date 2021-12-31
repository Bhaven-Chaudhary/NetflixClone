import './App.css';
import Row from './Components/Row'
import requestUrl from './requestUrl';

function App() {
  return (<>
    <h1> Hello There</h1>
    <Row title='Trending' requestUrl={requestUrl.trendingUrl} trendingRow></Row>
    <Row title='Netflix Originals' requestUrl={requestUrl.netflixOriginalsUrl}></Row>
    <Row title='Top Rated' requestUrl={requestUrl.topRatedUrl}></Row>
    <Row title='Action Movies' requestUrl={requestUrl.actionMoviesUrl}></Row>
    <Row title='Comedy Movies' requestUrl={requestUrl.comedyMoviesUrl}></Row>
    <Row title='Horror Movies' requestUrl={requestUrl.horrorMoviesUrl}></Row>
    <Row title='Romance Movies' requestUrl={requestUrl.romanceMoviesUrl}></Row>
    <Row title='Documentaries' requestUrl={requestUrl.documentariesUrl}></Row>
  </>

  )
}

export default App;
