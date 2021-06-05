import React from "react";
import { Button , Card, TextInput } from "react-native-paper";
import colors from '../theme';
import styles from "./movieStyles";

function AddMovieForm(props)
{
    return (<Card style={styles.card}>
        <TextInput value={props.name} onChangeText={(_name) => {
          props.setName(_name);
        }} left={<TextInput.Icon size={16} name="business" />} mode="flat" placeholder="Movie Name" style={styles.textInput} underlineColor={colors.gray} selectionColor={colors.gray} outlineColor={colors.blue} placeholderTextColor={colors.gray} />
        <TextInput onChangeText={(_rate) => {
          props.setRate(_rate);
        }} keyboardType="numeric" value={props.rate} left={<TextInput.Icon size={16} name="business" />} mode="flat" placeholder="Movie Rate" style={styles.textInput} underlineColor={colors.gray} selectionColor={colors.gray} outlineColor={colors.blue} placeholderTextColor={colors.gray} />
        <TextInput onChangeText={(_description) => {
          props.setDescription(_description);
        }} value={props.description} left={<TextInput.Icon size={16} name="business" />} mode="flat" placeholder="Movie Description" style={styles.textInput} underlineColor={colors.gray} selectionColor={colors.gray} outlineColor={colors.blue} placeholderTextColor={colors.gray} />
        <Button activeOpacity={1} color={colors.blue} style={styles.button} labelStyle={{ color: colors.white }} mode="contained" onPress={() => {
          props.onPressCallBack();
        }}>
          {props.text}
        </Button>

      </Card>)
}

export default AddMovieForm;