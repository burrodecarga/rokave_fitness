import { Image, ImageBackground, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, {useContext} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { FitnessItems } from '../context/Context';

const WorkoutScreen = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const params = route.params

  const { completed,setCompleted,
    workout,setWorkout,
    calories,setCalories,
    minutes,setMinutes,
    time,setTime} = useContext(FitnessItems)
  return (
    <>
    <ScrollView style={ styles.scrollView } showVerticalScrollIndicator={ false}>
      <Image source={{ uri:params.image }} style={styles.image}/>
      <AntDesign name="arrowleft" size={24} color="white" style={styles.arrow} onPress={()=>navigation.goBack()}/>
    
      {
        route.params.excersises.map((item,key)=>(
        <Pressable key={key} onPress={()=>{}} style={styles.pressable}>
          <Image source={{ uri:item.image }} style={styles.exercises}/>
          <View style={{ marginLeft:10 }}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.sets} >x {item.sets}</Text>
          </View>
            {completed.includes(item.name) ? (
              <AntDesign style={{marginLeft:10}} name="checkcircle" size={24} color="green" />
            ) : (
              null
            )}
        </Pressable>))
      }
    </ScrollView>
    <Pressable style={styles.pressableStart} onPress={()=>{

      let tiempo = new Date()
      setTime([...time,tiempo])
      setCompleted([])
      navigation.navigate('Fit',{excersises:params.excersises})
    }
  }>
      <Text style={styles.start}>INICIAR</Text>
    </Pressable>
    </>
  )
}

export default WorkoutScreen

const styles = StyleSheet.create({
  scrollView:{
    background:'white',
    marginTop:50,
  },
  image:{
    width:'100%',
    height:170
  },
  arrow: {
    position:'absolute',
    top:60,
    left:20
  },
  pressable:{
    flexDirection:'row',
    alignItems:'center',
    margin:10,
  },
  exercises: {
    width:150,
    height:90
  },
  name:{
    fontSize:14,
    fontWeight:'bold',
  },
  sets:{
    fontSize:17,
    marginTop:10,
  },
  pressableStart:{
    backgroundColor:'blue',
    paddingHorizontal:20,
    paddingVertical:10,
    marginLeft:'auto',
    marginRight:'auto',
    marginVertical:20,
    borderRadius:10,
  },
  start:{
    color:'white',
    fontSize:15,
    fontWeight:'600',
  
  }
})