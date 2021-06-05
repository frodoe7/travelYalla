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
        height : responsiveHeight(290)
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
        marginVertical : responsiveHeight(18),
        flexDirection : "row"
    },
    image : {
        width:responsiveWidth(80),
        resizeMode:"cover",
        height:responsiveHeight(120),
        alignSelf:"center",
        borderRadius:6
    },
    detailsWrapper : {
        marginLeft : responsiveWidth(16),
        justifyContent : "space-around"
    },
    title : {
        fontWeight : "bold"
    },
    description : {
        flexWrap:"wrap",
        maxWidth:responsiveWidth(200)
    },
    lastRow : {
        flexDirection : "row"
    },
    actions: {
        flexDirection:"row",marginLeft:20
    },
    editButton : {
        transform:[{ scale : .8 }],
        marginLeft: responsiveWidth(32)
    },
    deleteButton : {
        transform:[{ scale : .8 }],
        marginLeft: responsiveWidth(-20),
        padding : 0
    },
    noMoviesText : {
        alignSelf:"center",
        marginTop:responsiveHeight(24),
        color:colors.gray
    }
});

export default styles;