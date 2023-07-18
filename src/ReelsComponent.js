import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SingleReels from './SingleReels'
import { SwiperFlatList } from "react-native-swiper-flatlist"
import { videoData } from './Database'
const ReelsComponent = () => {
    const [currentIndex, setcurrentIndex] = useState(0)
    const handleChangeIndexValue = ({ index }) => {
        setcurrentIndex(index)
    }
    return (
        <SwiperFlatList

            data={videoData}
            vertical={true}
            onChangeIndex={handleChangeIndexValue}
            renderItem={({ item, index }) => (
                <SingleReels item={item} index={index} currentIndex={currentIndex} />
            )
            }
            keyExtractor={(item, index) => index}
        />
    )
}

export default ReelsComponent

const styles = StyleSheet.create({})