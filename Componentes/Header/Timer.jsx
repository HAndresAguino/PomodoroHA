import { View, StyleSheet, Text} from "react-native"

const Timer = ({time}) => {
    return (
        <View style= {styles.container}>
            <Text>
                {time}
            </Text>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "yellow",
        padding: 15,
        borderRadius: 15,
        flex: 1
    }
})

export default Timer 