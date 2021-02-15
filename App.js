import React, { useState } from "react"
import {
  Modal, Button, View, Text, SafeAreaView, StyleSheet
} from "react-native"

const App = () => {
  const [ showModal, setshowModal ] = useState( false )
  
  return (
    <SafeAreaView style={ { flex: 1 } }>
      <View style={ styles.container }>
        <Modal 
          animationType={ 'slide' }
          transparent={ false }
          visible={showModal}
          onRequestClose={ () => {
            console.log( "Modal has been closed" );
          }}
        >
          <View style={ styles.modal }>
            <Text style={styles.text}>
              Modal is Open
            </Text>
            <Button
              title="Close Modal"
              onPress={ () => {
                setshowModal( !showModal );
              }}
            />
          </View>
        </Modal>

        <Button 
          title="Click to Open Modal"
          onPress={ () => {
            setshowModal(!showModal);
          }}
        />

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    padding: 100,
  },
  text: {
    marginTop: 10,
    fontWeight: "bold",
  },
});

export default App;