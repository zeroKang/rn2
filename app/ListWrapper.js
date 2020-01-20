import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import BookList from './BookList';
import BookCover from './BookCover';


const ListWrapper = () => {

    const books = [
        {title:'Java', ISBN:'A001'},
        {title:'C#', ISBN:'A002'},
        {title:'C++', ISBN:'A003'},
        {title:'Python', ISBN:'A004'},
        {title:'Ruby', ISBN:'A005'},
    ]

    return(
        <>
        <View style= {style.container}>
            <View style= {style.header}>
                <Text style= {style.title}>ListWrapper</Text>
            </View>
            <View style= {style.content}>
                <BookList books={books}></BookList>
            </View>
            <View style= {style.footer}>
                <BookCover></BookCover>
            </View>

        </View>
        </>
    )

}

const style = {
    container: {
        flex:1,
        backgroundColor:'grey'
    },
    header: {
        flex:1,
        backgroundColor:'grey',
        alignItems:"center",
        justifyContent: "center"
    },
    content: {
        flex:10,
        backgroundColor:'white'
    },
    footer: {
        flex:10,
        backgroundColor:'blue'
    },

    title: {
        fontSize: 20
    }

}

export default ListWrapper