import React from 'react';
import { View, Image, Text, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  // extract these properties from album that from props
  const { title, artist, thumbnail_image, image, url } = album;
  const {
    thumbnailStyle,
    infoStyle,
    titleStyle,
    artworkStyle
  } = styles;

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
        <Button onPress={() => Linking.openURL(url)} />
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
