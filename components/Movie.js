import React from "react";
import { View , Image } from "react-native";
import { Text , Button } from "react-native-paper";
import { Rating } from "react-native-ratings";
import { trunc } from "../helpers/misc";
import colors from '../theme';
import styles from "./movieStyles";

function Movie(props)
{
    return (<View style={styles.dataItem}>
        <Image style={styles.image} source={{ uri: "https://source.unsplash.com/80x120/?movie"}} />
        <View style={styles.detailsWrapper}>
          <Text style={styles.title}>{props.item.name}</Text>
          <Text style={styles.description}>{trunc(props.item.description, 80)}</Text>
          <View style={styles.lastRow}>
            <Rating
              showRating={false}
              imageSize={12}
              readonly
              ratingCount={5}
              startingValue={props.item.rate}
              style={{ alignSelf: "center" }}
            />

            <View style={styles.actions}>
              <Button color={colors.greenBlue} uppercase={false} onPress={() => {
                props.editMovie();
              }} style={styles.editButton}>
                {props.text}
              </Button>
              <Button color={colors.red} uppercase={false} onPress={() => {
                props.deleteMovie();
              }} style={styles.deleteButton}>
                Delete
              </Button>
            </View>
          </View>
        </View>
      </View>)
}

export default Movie;