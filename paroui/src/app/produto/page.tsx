import { Text, View, Image, TextInput, Button, ScrollView } from "react-native"
import { styles } from "./styles"
import { Picker } from "@react-native-picker/picker"
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function ProductScreen() {

    const [selectedMassa, setSelectedMassa] = useState(""); // Estado para o valor selecionado

    return (
        <View style={styles.container}>

            <ScrollView style={styles.menuDescription}>

                <Link href="/home/page" asChild>
                    <Text style={styles.menuOption}>Doces</Text>
                </Link>

                <Image style={styles.itemImage} source={require("@/assets/images/eclair.jpg")} />

                <Text style={styles.titulo}>Eclair</Text>
                <Text style={styles.subtitulo}>Massa de farinha de trigo, recheada e cobertura de chocolate.</Text>
                <Text style={styles.preco}>R$ 10,00</Text>

                <Image style={styles.imageLinha1} source={require("@/assets/images/linha.png")} />
                <Text style={styles.titulo}>Personalizar</Text>

                <View style={styles.personalizar}>
                    <View style={styles.campos}>
                        <Text style={styles.escolha}>Escolher a massa</Text>
                        <Picker
                            selectedValue={selectedMassa}
                            onValueChange={(itemValue) => setSelectedMassa(itemValue)}
                            style={styles.picker} >
                            <Picker.Item label="Selecionar" value="" />
                            <Picker.Item label="Massa Tradicional" value="tradicional" />
                            <Picker.Item label="Massa amendoada" value="integral" />
                            <Picker.Item label="Massa Sem Glúten" value="sem_gluten" />
                        </Picker>
                    </View>
                    <View style={styles.campos}>
                        <Text style={styles.escolha}>Escolher um recheio</Text>
                        <Picker
                            selectedValue={selectedMassa}
                            onValueChange={(itemValue) => setSelectedMassa(itemValue)}
                            style={styles.picker} >
                            <Picker.Item label="Selecionar" value="" />
                            <Picker.Item label="Chocolate" value="chocolate" />
                            <Picker.Item label="Creme" value="creme" />
                            <Picker.Item label="morango" value="morango" />
                        </Picker>
                    </View>

                    <View style={styles.campos}>
                        <Text style={styles.escolha}>Observações</Text>
                        <TextInput placeholder="Digite sua observação" style={styles.campoObs} />
                    </View>
                </View>

                <View>
                    <Text style={styles.titulo}>Informação nutricional</Text>
                    <TouchableOpacity>
                        <Picker
                            selectedValue={selectedMassa}
                            onValueChange={(itemValue) => setSelectedMassa(itemValue)}
                            style={styles.picker} >
                            <Picker.Item label="Alergênicos:" value="" />
                            <Picker.Item label="Glúten e lactose " value="gluten" />
                        </Picker>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Picker
                            selectedValue={selectedMassa}
                            onValueChange={(itemValue) => setSelectedMassa(itemValue)}
                            style={styles.picker} >
                            <Picker.Item label="Ingredientes:" value="" />
                            <Picker.Item label="água, manteiga, sal, açucar, farinha de trigo," value="ingredientes" />
                            <Picker.Item label="ovos, leite, baunilha, chocolate" value="ingredientes" />
                        </Picker>
                    </TouchableOpacity>
                </View>

                <Image style={styles.imageLinha2} source={require("@/assets/images/linha.png")} />

                <TouchableOpacity >
                    <Text style={styles.botaoTexto}>Adicionar ao carrinho</Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    )
}