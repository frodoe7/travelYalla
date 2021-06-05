import React from "react";
import { Button , Card, TextInput } from "react-native-paper";
import colors from '../theme';
import styles from "./categoryStyles";

function AddCategoryForm(props)
{
    return (<Card style={styles.card}>
        <TextInput value={props.name} onChangeText={(_name) => {
            props.setName(_name);
        }} left={<TextInput.Icon size={16} name="business" />} mode="flat" placeholder="Category Name" style={styles.textInput} underlineColor={colors.gray} selectionColor={colors.gray} outlineColor={colors.blue} placeholderTextColor={colors.gray} />
        <TextInput value={props.description} onChangeText={(_description) => {
            props.setDescription(_description);
        }} left={<TextInput.Icon size={16} name="business" />} mode="flat" placeholder="Category Description" style={styles.textInput} underlineColor={colors.gray} selectionColor={colors.gray} outlineColor={colors.blue} placeholderTextColor={colors.gray} />
        <Button activeOpacity={1} color={colors.blue} style={styles.button} labelStyle={{ color : colors.white }} mode="contained" onPress={() => {
            props.addCategory();
        }}>
            create
        </Button>

    </Card>)
}

export default AddCategoryForm;