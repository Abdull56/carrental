import React, { useState } from 'react';
import { SafeAreaView, View, SectionList, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from '../styles';
import carData from '../data.json';
import { useRoute } from '@react-navigation/native';


function AvailableCar({navigation}) {
  const route = useRoute();
  const { isLiked = false } = route.params || {};
  const [localIsLiked, setLocalIsLiked] = useState(isLiked);

  const handleLikePress = () => {
    setLocalIsLiked(!localIsLiked);
  };

  const handleSecondPress = (item) => {
    navigation.navigate('Car Details', { carData: item });
  };

  return (
    <SafeAreaView style={styles.safecontainer}>
      <View style={styles.carContainer}>
        <SectionList
          sections={carData}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSecondPress(item)}>
                <View style={styles.card}>
                    <View style={styles.imageCard}>
                        <Image source={{ uri: item.imageUrl }} style={styles.image} resizeMode="contain" />

                        <TouchableOpacity onPress={handleLikePress}>
                        <Icon
                            name={localIsLiked ? 'heart' : 'heart'}
                            size={24}
                            color={localIsLiked ? 'red' : '#EAECCC'}
                        />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.cardCars}>
                        <Text style={styles.cardText}>{item.name}</Text>
                        <Text style={styles.cardText}>
                        <Icon name="star" size={16} color="#FF9800" />
                        {item.stars}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
          )}

          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 10,
              }}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}


export default AvailableCar