import React, {useState} from "react";
import './App.css';

const MoviesDB = {
  romance : [{name:"The Notebook", rating: 8, year:"2004", description: "The Notebook(2004) is a great love story about Noah, Ryan Gosling and Allie, Rachel McAdams based off of the famous novel written by Nicholas Sparks. The film is the story of how Noah and Allie met and their lives together being read later in life out of journal by Noah to Allie while she is suffering from Alzheimer's. This story is your normal cliché love story that everyone loves. The guy chasing after a girl, her parents not approving and in the end the two of them fall in love and live a happy life. ",image:"the-notebook.jpg"}, 
  {name:"Dirty Dancing", rating: 7, year:"1978", description: "This one's a classic.One word sums up this film 'Perfection'. That's it really!! I saw this film in 1987 when it was released and was completely blown away and like Baby I fell in love with Johnny and Patrick Swayze. It has such classic lines as 'I carried a watermelon' and 'Nobody puts Baby in the corner' and too many others to mention. I loved the story, the characters, the setting, the dancing, and well ? the music was phenomenal not one bad song in the whole soundtrack. It just shows that you don't have to spend a fortune to make a great film. Thank you to the cast and crew for making such a wonderful film which makes me smile like a Cheshire cat whenever I watch it.",image:"dirty-dancing.jpg"},
  {name:"La Vie En Rose", rating:6.5, year:"2007", description:"An un-chronological look at the life of the Little Sparrow, Édith Piaf (1915-1963). Her mother is an alcoholic street singer, her father a circus performer, her paternal grandmother a madam. During childhood she lives with each of them. At 20, she's a street singer discovered by a club owner who's soon murdered, coached by a musician who brings her to concert halls, and then quickly famous. Constant companions are alcohol and heartache. The tragedies of her love affair with Marcel Cerdan and the death of her only child belie the words of one of her signature songs, 'Non, je ne regrette rien.'", image:"la-vie-en-rose.jpg"},
  {name:"One Day", rating:7, year:"2011", description:"Emma and Dexter meet on the night of their university graduation. We see them every year on the anniversary of that date - July 15th. Emma is smart but success doesn't come quickly for her, whereas for Dexter, success and women come very easily. Through the years they grow apart as their lives take different directions and they meet other people. But as they grow apart from those other people and their lives start taking opposite directions again, Emma and Dexter find that they belong with each other.", image:"one-day.jpg"}
],
  comedy :  [{ name:"Blended", rating: 7, year: "2014", description: "After a blind date gone horribly wrong, Jim and Lauren agree they never, ever want to see each other again. Well, that's all about to change when the two find themselves and their respective families (including children) all stuck together in one suite at an African Safari vacation spot.", image:"blended.jpg"}, 
  {name:"Crazy, Stupid, Love", rating: 8.5, year:"2011", description:"It's a puzzling story which follows dramatic changes of attitude from lots of characters throughout this picture. Despite being an interesting story, it gets boring more often than I can neglect and although it tries a lot to be funny, it doesn't actually manage most of the time. It's a good movie", image:"crazy-stupid-love.jpg"},
  {name:"Just Go With It", rating:6.5, year:"2011", description:"Danny (Adam Sandler) must engage Katherine (Jennifer Aniston), his faithful assistant, to pretend to be his soon to be ex-wife. Danny must pretend that he is married, because he lied to his dream girl, Palmer (Brooklyn Decker) the most gorgeous woman in the world. To keep the woman he loves, covering up one lie soon turns into many lies.", image:"just-go-with-it.jpg"},
  {name:"We're The Millers", rating:7, year:"2013", description:"After being robbed of a week's take, small-time pot dealer David is forced by his boss to go to Mexico to pick up a load of marijuana. In order to improve his odds of making it past the border, David asks the broke stripper Rose and two local teenagers to join him and pretend they're on a family holiday.", image:"we're-the-millers.jpg"}
]
}
export default function App() {
  const [selected,setSelected] = useState("romance");



  function clickHandler(item){
    setSelected(item);
  }

  return (
    <div >
      <header className="header">
        <p style={{marginTop:"3.3rem", marginRight:"0.6rem"}}>
          MOVIE RECOMMENDER 
        </p>
        <img src="../images/media-player.png" height="100%" ></img>
      </header>
      <div className="middle">
        <div className="line">
          <div style={{ marginRight:"4px"}}>Don't know what to watch?</div>
          <div>Let us help you!</div>
        </div>
        <h2>GENRES</h2>
        <ul className="list">
          {
          Object.keys(MoviesDB).map((item) => {
            return (
            <li onClick={() => clickHandler(item)} key={item}>{item.toUpperCase()}</li>
            )
          })
          }
        </ul>
        <div className="movies">
          {MoviesDB[selected].map((movie) => (
            <div className="movie-card">
              <div>
                <img src={"../images/" + movie.image}></img>
              </div>
              <div>
                 <p style={{fontWeight:"bold"}} >{movie.name}</p> 
                 <small style={{color:"var(--primary-color)"}}>
                    {movie.rating}</small>  
                  <p style={{fontWeight:"lighter"}}>
                  {movie.description}
                  </p>
              </div>
            </div>
          )
          )}
        </div>
      </div>
      <footer className="footer">
         <p>
            Made with Love by 
               <a style={{marginLeft:"3px"}} href="https://akshita-saini.netlify.app">       
                  Akshita Saini </a> 
                &copy;
          </p>
      </footer>
    </div>
  );
}

