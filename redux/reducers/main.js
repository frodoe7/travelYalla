import { ADD_CATEGORY, ADD_MOVIE, DELETE_MOVIE, DEvarE_MOVIE, EDIT_MOVIE } from '../actions';
import { compact } from "lodash";
import { produce } from "immer";

const initialState = [
  {
    "id": 80877,
    "name": "Action",
    "description": "Boasting an entertaining villain and deeper emotional focus, this is a nimble sequel that improves upon the original",
    "movies": [
      {
        "id": 132548,
        "name": "SPIDER-MAN 2 ",
        "description": "Boasting an entertaining villain and deeper emotional focus, this is a nimble sequel that improves upon the original",
        "rate": "4.0"
      },
      {
        "id": 655881,
        "name": "BATTLE ROYALE",
        "description": "Battle Royale is a controversial and violent parable of adolescence, heightening teenage melodrama with life-or-death stakes.",
        "rate": "3.5"
      },
      {
        "id": 655882,
        "name": "ESCAPE FROM NEW YORK",
        "description": "Featuring an atmospherically grimy futuristic metropolis, Escape from New York is a strange, entertaining jumble of thrilling action and oddball weirdness.",
        "rate": "4.2"
      },
      {
        "id": 655883,
        "name": "IRON MONKEY",
        "description": "Iron Monkey may not have the poetic lyricism of Crouching Tiger, it makes up for it in fun and energy.",
        "rate": "3.8"
      }
    ]
  },
  {
    "id": 21281,
    "name": "Comedy",
    "description": "This acerbic action comedy introduced a winning combo: sparring buddies Simon Pegg and Nick Frost and master of style Edgar Wright, who dreamed up the script with Pegg.",
    "movies": [
      {
        "id": 655880,
        "name": "Juno",
        "description": "The chemical equation of writer Diablo Cody plus director Jason Reitman explodes onscreen with this non-traditional family comedy showcasing Cody’s edgy contemporary dialogue.",
        "rate": "4.3"
      },
      {
        "id": 132570,
        "name": "Shaun of the Dead",
        "description": "This acerbic action comedy introduced a winning combo: sparring buddies Simon Pegg and Nick Frost and master of style Edgar Wright, who dreamed up the script with Pegg.",
        "rate": "4.1"
      },
      {
        "id": 132574,
        "name": "Old School",
        "description": "You’re my boy, Blue! Say what you will about the Frat Pack films that followed it, but “Old School” still gets a passing grade.",
        "rate": "2.4"
      },
      {
        "id": 164438,
        "name": "Trainwreck",
        "description": "Producer Judd Apatow steered breakout standup comic Amy Schumer to her smash big-screen debut ($141 million worldwide) by helping her to write a recognizably real woman to play — accessible, honest, emotional — within the genre confines of a mainstream romantic comedy.",
        "rate": "3.9"
      }
    ]
  }
];


function getIndexById(data, id) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].id == id) return i;
  }

  return 0;
}

function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CATEGORY:
      var newCategory = { id: action.payload.id, name: action.payload.name, description: action.payload.description, movies: [] };
      return [...state, newCategory];
    case DELETE_MOVIE:
      var categoryIndex = getIndexById(state, action.payload.catId);
      var movieIndex = getIndexById(state[categoryIndex].movies, action.payload.id);
      
      var nextState = produce(state, draftState => {
        delete draftState[categoryIndex].movies[movieIndex];
        draftState[categoryIndex].movies = compact(draftState[categoryIndex].movies);
      });

      return nextState;
    case EDIT_MOVIE:
      var categoryIndex = getIndexById(state, action.payload.catId);
      var movieIndex = getIndexById(state[categoryIndex].movies, action.payload.id);
      var movie = { id: action.payload.id, name: action.payload.name, description: action.payload.description, rate: action.payload.rate };
      var nextState = produce(state, draftState => {
        draftState[categoryIndex].movies[movieIndex] = movie;
      })

      return nextState;
    case ADD_MOVIE:
      var categoryIndex = getIndexById(state, action.payload.catId);
      var movie = { id: action.payload.id, name: action.payload.name, description: action.payload.description, rate: action.payload.rate };

      var nextState = produce(state, draftState => {
        draftState[categoryIndex].movies.push(movie);
      })

      return nextState;
    default:
      return state;
  }
}

export default categoriesReducer;