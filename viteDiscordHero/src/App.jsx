
import './App.css';
import Navbar from './Navbar';
import discorImage from './assets/discord-background.png';


function App() {
  return (
    <div className="App">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/> 
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@900&family=Roboto:wght@400;500&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="index.css" />
      </head>
      <header>
        
      </header>
      <body>
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>IMAGINE A PLACE...</h1>
              <p>...where you can belong to a school club, a gaming group, or a worldwide art community.
                 Where just you and a handful of friends can spend time together. 
                A place that makes it easy to talk every day and hang out more often.</p>
              <button>Download for Mac</button>
              <button>Open Discord in your browser</button>
            </div>
            <img src={discorImage} />
          </div>
        </section>
      </body>
    </div>
  );
}
export default App;