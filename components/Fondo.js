import { ImageBackground, StyleSheet, View } from "react-native"

//Componente de fondo con números
const Fondo = ({children, backgroundColor}) => {
    return (
        <View style={[styles.background, {backgroundColor}]}>
            <ImageBackground
                source={require('../assets/fondo.jpg')}
                style={[styles.ImageBackground, {backgroundColor}]}
                imageStyle={{ opacity: 0.1 }}
            >
                {children}
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
background: {
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden'
},

    ImageBackground: {
        resizeMode: 'cover',
        width: '100%'
    }
});

export default Fondo;