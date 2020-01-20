import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableHighlight
} from 'react-native';


const BookList = ({books}) => {

    const handleClick = (isbn)=> {
        console.log(isbn)
    }


    const list = books.map(book =>  { 
        return (
            <TouchableHighlight key={book.ISBN} onPress={() => handleClick(book.ISBN)} >
                <Text  style={style.book}> {book.title}</Text>
            </TouchableHighlight>
        )} 
    )

    return (
        <View>
            {list}
        </View>
    )
}

const style = StyleSheet.create({
    book: {
        fontSize: 20,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: 'blue',
        fontWeight: 'bold',
        margin: 5,
        padding: 10
    }
})

export default BookList