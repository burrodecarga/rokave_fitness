import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, {useContext} from 'react'
import FitnessCard from '../components/FitnessCard'
import { FitnessItems } from '../context/Context'

const HomeScreen = () => {

  const { 
    workout,
    calories,
    minutes} = useContext(FitnessItems)
  return (
    <ScrollView style={{marginTop:40}}>
      <View style={styles.header}>
        <Text style={styles.entrena}>entrenamiento en casa</Text>
        <View style={styles.control}>
          <View>
            <Text style={styles.cantidad}>{workout}</Text>
            <Text style={styles.tipo}>rutinas</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.cantidad}>{calories.toFixed(2)}</Text>
            <Text style={styles.tipo}>kcal</Text>
          </View>
          <View>
            <Text style={styles.cantidad}>{minutes}</Text>
            <Text style={styles.tipo}>tiempo <Text style={{ fontSize:8 }}>(min)</Text></Text>
            
          </View>
        </View>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center'}}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png',
          }}
        />
      </View>
      <FitnessCard/>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F01C15',
    padding: 10,
    width: '100%',
    height: 200,
  },
  entrena: {
    textTransform: 'uppercase',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  control: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cantidad: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  tipo: {
    textTransform: 'uppercase',
    color: '#F7EFEF',
    fontSize: 12,
    marginTop: 6,
  },
  image:{ width: '90%', height: 140, marginTop: -50, borderRadius: 7 },
})
