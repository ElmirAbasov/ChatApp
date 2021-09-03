import * as React from "react";

import { Text, View, StyleSheet, Image } from "react-native";

export default function TabOneScreen() {
  return (
    //Inline styling

    <View style={styles.container}>
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png",}}style={styles.image}/>
      <View style={styles.rightContainer}>
          <View style={styles.row}>
            <Text style={styles.name}>Elon Musk</Text>
            <Text style={styles.text}>11:11am</Text>
          </View>
          <Text numberOfLines={1} style={styles.text}> Eniki Beniki sudakamo teus beus kuzma teuz box</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,


  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 30,
    marginRight: 10,
  },

  rightContainer: {
   
    flex: 1,
    justifyContent: 'center',


  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
    
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 3,

  },

  text: {
    
    color: "grey",
  },
});
