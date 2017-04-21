import React from 'react';
import { View, Image, Text, Button, Alert } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
  // extract these properties from album that from props
  const { title, artist, thumbnail_image, image } = album;
  const {
    thumbnailStyle,
    infoStyle,
    titleStyle,
    artworkStyle
  } = styles;

  const onPressLearnMore = () => {
    Alert.alert(title + ' clicked!');
    console.log(title + ' clicked.');
  };

  return (
    <Card>
      <CardSection>
        <View>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={infoStyle}>
          <Text style={titleStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={artworkStyle}
          source={{ uri: image }}
        />
      </CardSection>

      <CardSection>
        <Button
          onPress={onPressLearnMore}
          title="Learn more"
          color="#841584"
        />
      </CardSection>
    </Card>
  );
};

const styles = {
  thumbnailStyle: {
    width: 50,
    height: 50,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 5
  },
  infoStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    //backgroundColor: 'yellow',
    height: 50
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  artworkStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
