import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import fitness from '../data/fitness'
import { useNavigation } from '@react-navigation/native';

const FitnessCard = () => {
  const data = fitness
  const navigation = useNavigation()
  return (
    <View>
      {
        data.map((item,key)=>(
        <Pressable key={key} style={styles.pressable}onPress={()=>navigation.navigate('Workout',{image:item.image, excersises:item.excersises
        })}>
         <Image
            style={styles.image}
            source={{ uri: item.image }}
          />
          <Text style={styles.text}>{item.name}</Text>
          <MaterialCommunityIcons name="lightning-bolt" size={36} color="white" style={styles.icono} />
        </Pressable>))
      }
    </View>
  )
}

export default FitnessCard

const styles = StyleSheet.create({
  pressable:{
    justifyContent:'center',
    alignItems:'center',
    margin:10,
  },
  image:{ width: '95%', height: 140, marginTop: 10, borderRadius: 7 },
  text:{ 
    position: 'absolute',
    fontSize:16,
    fontWeight:'bold',
    color: 'white',
    left: 20,
    top:15
  },
  icono:{
    position: 'absolute',
    fontSize:16,
    fontWeight:'bold',
    left: 20,
    top:'65%',
  }
})