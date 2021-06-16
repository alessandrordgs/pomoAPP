import React, { useEffect, useState, } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
import TimerButton from './components/Timers';
import Modal from './components/Modal';

export default function App() {

  const [time, setTime] = useState(25 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFInished] = useState (false)
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split('');
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, "0").split('');


  function handleModal(){setHasFInished(false)}

  function start() {setIsActive(true)}

  function reset() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(25 * 60);
    setHasFInished(false);
  }

  function fiveMinutes() { setTime(25 * 12)}
  function tenMinutes() {setTime(25 * 24)}
  function defaultMinutes() {setTime(25 * 60)}
  let countdownTimeout = time

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000)
    } else if (isActive && time === 0) {
      setIsActive(false);
      setTime(25 * 60);
      setHasFInished(true);
    }
  }, [isActive, time])

  return (
    <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.heading}>PomoApp</Text>  
            <View style={styles.countdown}>

                <View style={styles.countdownNumber}>

                  <Text style={styles.numberText}>{minuteLeft}</Text>
                  <Text style={styles.numberText}>{minuteRight}</Text>

                </View>

                <Text style={styles.numberText}>:</Text>

                <View style={styles.countdownNumber}>

                  <Text style={styles.numberText}>{secondsLeft}</Text>
                  <Text style={styles.numberText}>{secondsRight}</Text>

                </View>

            </View>

           {hasFinished ? (<Modal press={handleModal} />) : (<>{isActive ?
              (<TouchableOpacity onPress={reset} style={styles.buttonReset}>
                <Text style={styles.buttonText}>Abandonar Pomo</Text>
              </TouchableOpacity>)
              :
              (<TouchableOpacity onPress={start} style={styles.button}>
                <Text style={styles.buttonText}>Vamo Focar!</Text>
              </TouchableOpacity>)
            }</>)}
             <Text style={styles.footer}>Escolha o tempo para iniciar</Text>
              <View style={styles.containerTimers}>
                  
                  <TimerButton Timer="05" press={fiveMinutes}/>
                  <TimerButton Timer="10" press={tenMinutes}/>
                  <TimerButton Timer="25" press={defaultMinutes}/>
                  
              </View>
          </View>
          
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257E5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  countdown: {
    flexDirection: 'row',
    width: 250,
    height: 130,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },
  countdownNumber: {
    flexDirection: 'row',
  },
  numberText: {
    fontSize: 55
  },
  button: {
    backgroundColor: '#40E655',
    marginTop: 40,
    width: 180,
    height: 60,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonReset: {
    backgroundColor: '#E22E2A',
    marginTop: 40,
    width: 180,
    height: 60,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  containerTimers:{
    flexDirection:"row",
    marginTop:20,
    justifyContent:"space-between",
    width:200
  },
  heading:{
    fontSize:45,
    color:"#fff",
    marginBottom:20,
  },
  footer:{
    fontSize:20,
    color:"#fff",
    marginTop:20
  }

});
