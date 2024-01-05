import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button , SafeAreaView, Platform} from 'react-native'; 
import { useState } from 'react';
import Header from './Componentes/Header/Header';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Timer from './Componentes/Header/Timer'

//!   >>>>>ABRE ESTA APP JUNTO CON LA EXPLICACIÒN PARA QUE ENTIENDAS MÀS ANDRES <<<<<


const colores = [ "red", "blue", "green"]


export default function App() {

  const [isWorking, setIWirking] = useState(false) ; // Con esto inicializamos el boton del reloj en cero
  const [time, setTime] = useState(25*60); // Estos son los minutos
  const [currentTime , setCurrentTime] = useState("POMO" | "SHORT" | "LARGE") //Esta variable es para saber a que me pomodoro ponerle el borde





  return (
    <SafeAreaView style={[styles.container,{ backgroundColor: Colors[currentTime]}]}> 
    <View style = {{paddingTop: Platform.OS === "android" && 50, paddingHorizontal: 15}}>
    <Text style={{ fontSize: 20, color: Platform.OS === "ios" ? "red" : "black", }}> App Pomodoro HELMAN </Text> 
      <StatusBar style="auto" />
    </View> 
    <Header time = {time} currentTime = {currentTime} setCurrentTime = {setCurrentTime} setTime={setTime}/>
    <Timer time={time} />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: 'center',
   

  },


});
 