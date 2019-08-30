import React from 'react';
import {
  AppRegistry,
  asset,
  Image,
  NativeModules,
  StyleSheet,
  Text,
  View,
  VrButton
} from 'react-360';

import {Surface} from 'react-360-web';

const shopeeOffice = NativeModules.ShopeeOffice;
NativeModules.ExternalAssets.assetRoot = 'https://cf.shopee.co.id/file/';

export class InfoPanelOffice extends React.Component {
  move(){
      if(this.state.move === 'office1'){
        shopeeOffice.renderOffice2();
        this.setState({ move: 'office2'})
      } else if(this.state.move === 'office2') {
        shopeeOffice.renderOffice1();
        this.setState({ move: 'office1'})
      }
  }

  state = {
      move: 'office1'
  }

  render() {
    return (
      <View style={styles.displayPanel}>
            <VrButton  onClick={() => this.move()}>
            <Image source={{uri: "/static_assets/icon_location.png"}} 
            style={{width: 100, height: 100}} />

              <View style={styles.messageBox}>
                <Text style={{}}>
                  {this.props.text}
                </Text>
              </View>
            </VrButton>
      </View>
    );
  }
};


export default class OfficeVR extends React.Component {
  render() {
    return (
      <View>
        
      </View>
    );
  }
};

const styles = StyleSheet.create({
  displayPanel: {
    width: 100,
    height: 100,
    flexDirection: 'column',
  },
  messageBox: {
    padding: 20,
    backgroundColor: '#F7F7F7',
    borderColor: '#C4002F',
    borderWidth: 2,
    width: 500,
  },
  attractionBox: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F7F7F7',
    borderColor: '#C4002F',
    borderWidth: 2,
    width: 500,
    height: 300,
  },
  attractionText: {
    fontSize: 30,
    color: '#C4002F'
  },
});


AppRegistry.registerComponent('InfoPanelOffice', () => InfoPanelOffice);
AppRegistry.registerComponent('OfficeVR', () => OfficeVR);
