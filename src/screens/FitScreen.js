import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import React, { useState, useContext } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'
import { FitnessItems } from '../context/Context'

const FitScreen = () => {
  const route = useRoute()
  const navigation = useNavigation()
  const params = route.params
  const excersises = route.params.excersises
  const [index, setIndex] = useState(0)
  const currentIndex = excersises[index]

  const { completed,setCompleted,
    workout,setWorkout,
    calories,setCalories,
    minutes,setMinutes,
    time, setTime} = useContext(FitnessItems)

   

  return (
    <SafeAreaView style={{ marginTop: 50 }}>
      <Image source={{ uri: currentIndex.image }} style={styles.image} />
      <Text style={styles.text}>{currentIndex.name}</Text>
      <Text style={styles.textSet}>x {currentIndex.sets}</Text>
      <View style={styles.view}>
        <Pressable
          style={styles.pressable}
          onPress={() => {
            navigation.navigate('Rest')
            if(index===0) navigation.navigate('Home')
            setTimeout(() => {
              index > 0 && setIndex(index - 1)
            }, 200)
          }}
        >
          <AntDesign name='stepbackward' size={24} color='white' />
        </Pressable>
        {index + 1 >= excersises.length ? (
          <Pressable
            style={styles.pressable}
            onPress={() => {
              navigation.navigate('Home')
            }}
          >
            <Text style={styles.hecho}>HECHO</Text>
          </Pressable>
        ) : (
          <Pressable
            style={styles.pressable}
            onPress={() => {
              navigation.navigate('Rest')
              let tiempo = new Date()
              setTime([...time,tiempo])
              setWorkout(workout+1)
              setMinutes(minutes+1.5)
              setCalories(calories+0.061)
              setCompleted([...completed,currentIndex.name])
              setTimeout(() => {
                setIndex(index + 1)
                if (index > excersises.length) {
                  setIndex(index - 1)
                  navigation.navigate('Home')
                }
              }, 200)
            }}
          >
            <Text style={styles.hecho}>HECHO</Text>
          </Pressable>
        )}
        {index + 1 >= excersises.length ? (
          <Pressable
            style={styles.pressable}
            onPress={() => {
              navigation.navigate('Home')
            }}
          >
            <AntDesign name='stepforward' size={24} color='white' />
          </Pressable>
        ) : (
          <Pressable
            style={styles.pressable}
            onPress={() => {
              navigation.navigate('Rest')
              setTimeout(() => {
                setIndex(index + 1)
              }, 200)
            }}
          >
            <AntDesign name='stepforward' size={24} color='white' />
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  )
}

export default FitScreen

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '50%',
    resizeMode: 'contain',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  textSet: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  pressable: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginVertical: 20,
    borderRadius: 10,
  },
  hecho: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
  },
  view: {
    flexDirection: 'row',
    marginTop: 10,
  },
})
