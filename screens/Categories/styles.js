import { StyleSheet } from "react-native";
import Responsive from "../../helpers/responsive";
import colors from "../../theme";
const { responsiveHeight , responsiveWidth , scaleFont } = Responsive;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding : responsiveWidth(18),
        backgroundColor : "#FFF"
    },
    card : {
        height : responsiveHeight(220)
    },
    textInput : {
        backgroundColor : "rgba(0,0,0,0)",
        transform:[{ scale : .8 }]
    },
    button: {
        marginHorizontal : responsiveWidth(32),
        marginTop : responsiveHeight(16)
    },
    dataItem : {
        marginVertical : responsiveHeight(18)
    },
    image : {
        width:responsiveWidth(160),
        resizeMode:"cover",
        height:responsiveHeight(240),
        alignSelf:"center",
        borderRadius:6
    },
    title : {
        fontWeight : "bold",
        marginTop : responsiveHeight(12)
    },
    description : {
        flexWrap:"wrap",
        maxWidth:responsiveWidth(150),
        marginTop : responsiveHeight(4)
    }
});

export default styles;