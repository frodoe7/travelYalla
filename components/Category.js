import React from "react";
import { TouchableOpacity , Image } from "react-native";
import { Text } from "react-native-paper";
import { trunc } from "../helpers/misc";
import styles from "./categoryStyles";

function Category(props)
{
    return (<TouchableOpacity onPress={()=>{
        props.navigation.navigate("Movies" , {
            catId : props.item.id
        });
    }} style={styles.dataItem}>
        <Image style={styles.image} source={{uri : "https://source.unsplash.com/150x240/?movie"}} />
        <Text style={styles.title}>{props.item.name}</Text>
        <Text style={styles.description}>{trunc(props.item.description,40)}</Text>
    </TouchableOpacity>)
}

export default Category;