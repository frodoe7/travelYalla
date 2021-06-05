import React, { useState, useEffect } from "react";
import { SafeAreaView, FlatList } from "react-native";
import Toast from 'react-native-toast-message';
import radig from "radig";
import Movie from "../../components/Movie";
import { useSelector, useDispatch } from "react-redux";
import { Text } from "react-native-paper";
import { ADD_MOVIE, EDIT_MOVIE, DELETE_MOVIE, createAction } from "../../redux/actions";
import styles from "./styles";
import AddMovieForm from "../../components/AddMovieForm";

const Movies = (props) => {
  const data = useSelector(state => state);
  const dispatch = useDispatch();

  const [catId, setCatID] = useState(props.route.params.catId);
  const [movies, setMovies] = useState([]);
  const [editableIndex, setEditableIndex] = useState(-1);
  const [name, setName] = useState("");
  const [rate, setRate] = useState("");
  const [description, setDescription] = useState("");

  const fetchMoviesByCatID = (_catId) => {
    let category = data.find((item) => (item.id == _catId));
    return category.movies;
  }

  useEffect(() => {
    setMovies(fetchMoviesByCatID(catId));
  }, [fetchMoviesByCatID(catId)]);

  const validated = () => {
    if (name.length < 3)
      return { success: false, message: "Movie name is too short" };
    if (description.length < 5)
      return { success: false, message: "Movie description is too short" };
    if (rate.length == 0)
      return { success: false, message: "Movie rate is required" };
    if (isNaN(rate))
      return { success: false, message: "Invalid Rate" };
    if (parseInt(rate) < 1 || parseInt(rate) > 5)
      return { success: false, message: "Movie Rate must be between 1 and 5" };
    return { success: true };
  }

  const addMovie = () => {
    let validation = validated();
    if (validation.success) {
      dispatch(createAction(ADD_MOVIE, {
        catId,
        name,
        rate,
        id: parseInt(radig("5")),
        description
      }));

      Toast.show({
        type: "success",
        "text1": "Thank you",
        text2: "Added in success",
        visibilityTime: 3000,
      });

      emptyCurrentMovie();
    }
    else {
      Toast.show({
        type: "error",
        "text1": "Error",
        text2: validation.message,
        visibilityTime: 3000,
      });
    }
  }

  const editMovie = () => {
    let validation = validated();
    if (validation.success) {
      dispatch(createAction(EDIT_MOVIE, {
        catId,
        name,
        rate,
        id: movies[editableIndex].id,
        description
      }));

      Toast.show({
        type: "success",
        "text1": "Thank you",
        text2: "Edited in success",
        visibilityTime: 3000,
      });

      setEditableIndex(-1);
      emptyCurrentMovie();
    }
    else {
      Toast.show({
        type: "error",
        "text1": "Error",
        text2: validation.message,
        visibilityTime: 3000,
      });
    }
  }

  const fillMovieToEdit = (movie) => {
    setName(movie.name);
    setRate(movie.rate);
    setDescription(movie.description);
  }

  const emptyCurrentMovie = () => {
    setName("");
    setRate("");
    setDescription("");
  }

  return (
    <SafeAreaView style={styles.container}>
      <AddMovieForm name={name} description={description} rate={rate} setName={(_name) => {
        setName(_name);
      }} setDescription={(_description) => {
        setDescription(_description);
      }} setRate={(_rate) => {
        setRate(_rate);
    }} onPressCallBack={() => {
        (editableIndex == -1) ? addMovie() : editMovie();
      }} text={(editableIndex == -1) ? "add movie" : "edit movie"} />

      {movies.length == 0 && <Text style={styles.noMoviesText}>No Movies Exist</Text>}

      <FlatList showsVerticalScrollIndicator={false} data={movies} renderItem={({ item, index }) => {
        return (<Movie item={item} deleteMovie={() => {
          dispatch(createAction(DELETE_MOVIE, { id: item.id, catId: catId }));
        }} editMovie={() => {
          if (editableIndex == index) {
            emptyCurrentMovie();
            setEditableIndex(-1);
          }
          else {
            fillMovieToEdit(item);
            setEditableIndex(index);
          }
        }} text={(editableIndex == index) ? "Undo" : "Edit"} />)
      }} />
    </SafeAreaView>
  );
};

export default Movies;