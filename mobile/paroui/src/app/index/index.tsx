import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style"

export default function Index() {
    const MENU = [
    {
        id: 1,
        name: "Eclair",
        description: "Massa de farinha de trigo, recheada e cobertura de chocolate.",
        price: 10.00,
        image: require("@/assets/images/eclair.jpg") // Falta a extensão da img
    },
    {
        id: 2,
        name: "Profiterole",
        description: "Massa de farinha de trigo, recheada e cobertura de chocolate.",
        price: 2.50,
        image: require("@/assets/images/profiterole.jpg")
    },
    {
        id: 3,
        name: "Macaron",
        description: "Massa de farinha de trigo, recheada e cobertura de chocolate.",
        price: 1.99,
        image: require("@/assets/images/macaron.jpg")
    },
    {
        id: 4,
        name: "Opera Cake",
        description: "Massa de farinha de trigo, recheada e cobertura de chocolate.",
        price: 16.50,
        image: require("@/assets/images/opera.jpg")
    },
    {
        id: 5,
        name: "Cheesecake",
        description: "Massa de farinha de trigo, recheada e cobertura de chocolate.",
        price: 14.50,
        image: require("@/assets/images/cheesecake.jpg")
    },
    {
        id: 6,
        name: "Tartelete",
        description: "Massa de farinha de trigo, recheada e cobertura de chocolate.",
        price: 9.50,
        image: require("@/assets/images/tartelete.jpg")
    }
    ]


    return (
        <View style={styles.container}>
            
                        <ScrollView style={styles.menuList}>
            <View style={styles.header}>
                <Image style={styles.headerImage} source={require("@/assets/images/padaria.jpg")} />
                <Text style={styles.restauranteName}>PAR'OUI</Text>
            </View>

            <View style={styles.tabs}>
                {["Doces", "Salgados", "Bebidas", "Brunch"].map((item) => (
                    <TouchableOpacity>
                        <Text style={styles.tabsName}>{item}</Text>
                    </TouchableOpacity>
                ))}
            </View>

                {
                    MENU.map((item) => (
                        <TouchableOpacity style={styles.menuItem}>
                            <View style={styles.menuContent}>
                                <Text style={styles.itemName}>{item.name}</Text>
                                <Text style={styles.itemDescription}>{item.description}</Text>
                                <Text style={styles.itemPrice}>{item.price.toFixed(2)}</Text>
                            </View>
                            <Image source={item.image} style={styles.itemImage} />
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        </View>

    )
}

