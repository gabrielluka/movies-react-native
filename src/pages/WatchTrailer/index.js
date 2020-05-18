import React, {Component} from 'react';
import {WebView} from 'react-native-webview';
import {View} from 'react-native';

export default class WatchTrailer extends Component {
  constructor(props) {
    super(props);
    const {idMovie} = this.props.route.params.infoMovie;
    this.state = {uriVideo: `https://www.youtube.com/embed/${idMovie}`};
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <WebView source={{uri: this.state.uriVideo}} />
      </View>
    );
  }
}
