import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        // ocupa todo o espaço disponível
        flex: 1,
        backgroundColor: "#f4eded"
    },
    header: {
        // padding: 16
    },
    headerImage: {
        width: "100%",
        height: 700,
        position: "relative"
    },
    restauranteName: {
        fontSize: 50,
        fontWeight: "bold",
        marginTop: 16,
        position: "absolute",
        color: "#fff",
        fontFamily: "Hammersmith one",
        alignSelf: 'center',
        bottom: '50%'
    },
    tabs: {
        flexDirection: "row",
        padding: 16,
        borderBottomColor: "#eee",
        borderBottomWidth: 1,
        gap: 16
    },
    tabsName: {
        color: "#666"
    },
    menuList: {
        padding: 16,
        flex: 1
    },
    menuItem: {
        flexDirection: "row",
        borderBottomColor: "#eee",
        borderBottomWidth: 1,
        padding: 16
    },
    menuContent: {
        flex: 1
    },
    itemImage: {
        width: 80,
        height: 80,
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
    }
})