import { View, Text, Style, TouchableOpacity, StyleSheet } from "react-native"

const Header = ({ setTime, currentTime, setCurrentTime }) => {  //Aquí recibe las propiedades para las funciones

    const opciones = ["Reiniciar", "5 minutos", "Tiempo largo"]

    function handlePress(index) { //Esta función nos pone el current time que presione el usuario
        const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
        setCurrentTime(index);
        setTime(newTime * 60)

    }



    return (
        <View style={{ flexDirection: "row" }}>
            {
                opciones.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[estilos.itemStyle, currentTime !== index && {borderBlockColor: "transparent"}]}
                        onPress={() => handlePress(index)}>
                        <Text>{item}</Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    )
}


const estilos = StyleSheet.create({
    itemStyle: {
        borderWidth: 1,
        padding: 3,
        width: "33%",  //Con esto toma el 33% del espacio de la pantalla
        alignItems: "center",
        borderColor: "white",
        marginVertical: 20
    }
})
export default Header

// A tener en cuenta acá. El touchable opacity se puede seleccionar y cuando se toca se opaca
//El onPress es un evento el cual realiza la función cuando se presione