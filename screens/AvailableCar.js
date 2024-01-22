import React, { useState } from 'react';
import { SafeAreaView, View, SectionList, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { globalStyles } from '../components/styles/globalStyles';
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
    <SafeAreaView style={globalStyles.safecontainer}>
      <View style={globalStyles.carContainer}>
        <SectionList
          sections={carData}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSecondPress(item)}>
                <View style={globalStyles.card}>
                    <View style={globalStyles.imageCard}>
                        <Image source={{ uri: item.imageUrl }} style={globalStyles.image} resizeMode="contain" />

                        <TouchableOpacity onPress={handleLikePress}>
                        <Icon
                            name={localIsLiked ? 'heart' : 'heart'}
                            size={24}
                            color={localIsLiked ? 'red' : '#EAECCC'}
                        />
                        </TouchableOpacity>
                    </View>
                    <View style={globalStyles.cardCars}>
                        <Text style={globalStyles.cardText}>{item.name}</Text>
                        <Text style={globalStyles.cardText}>
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