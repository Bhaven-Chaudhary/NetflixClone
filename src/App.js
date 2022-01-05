import './App.css';
import Banner from './Components/Banner';
import Bottom from './Components/Bottom'
import Row from './Components/Row'
import requestUrl from './requestUrl';
import NavBar from './Components/NavBar';
function App() {
  return (<>

    <NavBar></NavBar>
    <Banner />
    <div className='rows'>
      <Row title='Trending Now' requestUrl={requestUrl.trendingUrl} trendingRow></Row>
      <Row title='Netflix Originals' requestUrl={requestUrl.netflixOriginalsUrl}></Row>
      <Row title='Top Rated' requestUrl={requestUrl.topRatedUrl}></Row>
      <Row title='Action Movies' requestUrl={requestUrl.actionMoviesUrl}></Row>
      <Row title='Crime Movies' requestUrl={requestUrl.crimeMoviesUrl}></Row>
      <Row title='Family Movies' requestUrl={requestUrl.familyMoviesUrl}></Row>
      <Row title='Comedy Movies' requestUrl={requestUrl.comedyMoviesUrl}></Row>
      <Row title='Horror Movies' requestUrl={requestUrl.horrorMoviesUrl}></Row>
      <Row title='Romance Movies' requestUrl={requestUrl.romanceMoviesUrl}></Row>
      <Row title='Documentaries' requestUrl={requestUrl.documentariesUrl}></Row>
    </div>

    <Bottom></Bottom>

  </>

  )
}

export default App;
