import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        // ocupa todo o espaço disponível
        flex: 1,
        backgroundColor: "#f4eded",
        color: "#8C4410",
    },
    headerImage: {
        width: "100%",
        height: 700,
        position: "relative"
    },
    restauranteName: {
        fontSize: 50,
        fontWeight: "bold",
        position: "absolute",
        color: "#fff",
        alignSelf: 'center',
        bottom: '50%'
    },
    tabs: {
        flexDirection: "row",
        padding: 18,
        borderBottomColor: "#eee",
        borderBottomWidth: 1,
        justifyContent: "space-evenly",
    },
    tabsName: {
        color: "#8C4410"
    },
    menuList: {
        flex: 1
    },
    menuItem: {
        flexDirection: "row",
        borderBottomColor: "#eee",
        borderBottomWidth: 25,
        padding: 16
    },
    menuContent: {
        flex: 1,
        marginLeft: 16
    },
    itemImage: {
        width: 95,
        height: 95,
        borderRadius: 8
    },
    itemName: {
        fontSize: 16,
        fontWeight: "bold"
    },
    itemDescription: {
        color: "#666",
        marginTop: 4
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 8
    },
    menuTitle: {
        display: "flex",
        alignItems: "center"
    },
    menu: {
        fontSize: 45,
        color: "#8C4410",
        paddingTop: 20
    },
    menuOption: {
        fontSize: 30,
        color: "#8C4410",
        paddingBottom: 50,
    },
    linha: {
        color:"#5b2b13"
    }
})