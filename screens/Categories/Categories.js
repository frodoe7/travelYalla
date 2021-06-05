import React , { useState } from "react";
import Toast from 'react-native-toast-message';
import radig from "radig";
import { SafeAreaView , FlatList } from "react-native";
import AddCategoryForm from "../../components/AddCategoryForm";
import Category from "../../components/Category";
import { useSelector , useDispatch } from "react-redux";
import { ADD_CATEGORY, createAction } from "../../redux/actions";
import styles from "./styles";

const Categories = (props) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const data = useSelector(state => state);
    const dispatch = useDispatch();

    const validated = () => {
        if (name.length < 3)
           return { success : false , message : "Movie name is too short" };
        if (description.length < 5)
           return { success : false , message : "Movie description is too short" };
        return { success : true };
    }

    const addCategory = () =>
    {
        let validation = validated();
        if (validation.success)
        {
            dispatch(createAction(ADD_CATEGORY , { 
                name,
                id : parseInt(radig("5")),
                description
             }));
    
             Toast.show({
                 type : "success",
                 "text1" : "Thank you",
                 text2 : "Added in success",
                 visibilityTime : 3000,
             });

             emptyCurrentCategory();
        }
        else
        {
            Toast.show({
                type : "error",
                "text1" : "Error",
                text2 : validation.message,
                visibilityTime : 3000,
            });
        }
    }

    const emptyCurrentCategory = () =>
    {
      setName("");
      setDescription("");
    }

    return (
        <SafeAreaView style={styles.container}>
            <AddCategoryForm name={name} description={description} setName={(_name) => {
                setName(_name);
            }} setDescription={(_description) => {
                setDescription(_description);
            }} addCategory={() => {
                addCategory();
            }} />
            <FlatList showsVerticalScrollIndicator={false} columnWrapperStyle={{justifyContent: 'space-between'}} numColumns={2} data={data} renderItem={({item}) => {
                return (<Category item={item} navigation={props.navigation} />)
            }} />
        </SafeAreaView>
    );
};

export default Categories;