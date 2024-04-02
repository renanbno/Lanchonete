import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

function ScrollViewExemple(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <ScrollView horizontal={true}>

            </ScrollView>
        </View>
        );
}

const styles = StyleSheet.create({
    container: {

    }

});

export default ScrollViewExemple;