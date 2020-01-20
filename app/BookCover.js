import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';


const BookCover = ({imgName}) => {
    return (
        <View>
            <Text>SHOW BOOK COVER</Text>

            <Image source={require('../assets/imgs/java.jpg')} />
        </View>
    )
}

export default BookCover