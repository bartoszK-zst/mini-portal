import { useState } from "react";
import Card from "./Card";

export default function Portal({books = []}){
  const [darkMode, setDarkMode] = useState(false);

  function ToggleBgColor(){
    if(darkMode){
      setDarkMode(false);
    }
    else{
      setDarkMode(true);
    }
  }

  console.log(books);

  return(
    <div className={(darkMode ? 'bg-dark text-light' : 'bg-light text-dark') + ' container-100 h-100'}>
      <div className='.container-fluid bg-primary text-light'>
        Portal o książkach
      </div>
      <div>
        <div className="position-absolute bottom-0 end-0 p-3">
          <button className={
            "p-2 rounded-pill border border-2 " +
            (darkMode ? "border-light bg-dark" : "border-dark bg-light")
          }
            onClick={() => ToggleBgColor()}>
              {darkMode ? '☀️' : '🌑'}
            </button>
        </div>
        <ul className="list-group h-100">
          {books.map((book) => 
            <li className="list-group-item">
              <Card book={book}/>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}