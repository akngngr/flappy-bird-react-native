import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

const Obstacles = ({
    color, 
    obstaclesLeft, 
    obstacleWidth, 
    obstacleHeight, 
    gap,
    randomBottom    
}) => {


    return (  
        <>
            <View style={{
                position: 'absolute',
                backgroundColor: color,
                width: obstacleWidth,
                height: obstacleHeight,
                left: obstaclesLeft,
                bottom: randomBottom + obstacleHeight + gap,
            }}>
                <Image style={styles.image} source={require('../assets/pipe.png')}/>
            </View>
            <View style={{
                position: 'absolute',
                backgroundColor: color,
                width: obstacleWidth,
                height: obstacleHeight,
                left: obstaclesLeft,
                bottom: randomBottom
            }}>
                <Image source={require('../assets/pipe.png')}/>
            </View>
        </>
    );
}
 const styles = StyleSheet.create({
     image: {
        transform: [{rotate: '180deg'}],
     }
 })
export default Obstacles;