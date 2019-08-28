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

const officeModule = NativeModules.officeModule;
const imagesObj = {
  info: {
    name: 'info',
    src: 'https://cf.shopee.co.id/file/a45b11e0a5bc3b45c1ba001b32b156ff',
    width: 100,
    height: 100
  },
  lift: {
    name: 'lift',
    src: '/static_assets/lift.jpg'
  },
  office1: {
    name: 'office1',
    src: '/static_assets/office1.jpg'
  },
  office2: {
    name: 'office2',
    src: '/static_assets/office2.jpg'
  }
}

NativeModules.ExternalAssets.assetRoot = 'https://cf.shopee.co.id/file/';

export class InfoPanel extends React.Component {
  state = {
    img: imagesObj.info,
  }

  transformDisplay(id) {
    if(this.state.img.name.indexOf(id) >= 0){
      this.resetPanel(id)
      return 
    }
    this._changeSurfaceDimensions(500, 400, id);
    this.setState({img: imagesObj[id] });
  }

  resetPanel(id) {
    this._changeSurfaceDimensions(100, 100, id);
    this.setState({img: imagesObj.info});
  }

  _changeSurfaceDimensions(width, height, id) {
    officeModule.resizeSurface(width, height, id);
  }

  render() {
    let { img } = this.state;
    return (
      <View style={styles.displayPanel}
            hitSlop={20}
            >
            <VrButton  onClick={() => this.transformDisplay(this.props.id)}>
              <Image source={{uri: img.src}} style={{width: img.width, height: img.height}} />
              <View style={styles.messageBox}>
                <Text style={styles.attractionText}>
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
        <View style={styles.attractionBox}>
          <VrButton onClick={() => officeModule.start()}>
            <Text style={styles.attractionText}>
              Welcome!
            </Text>
            <Text  style={styles.attractionText}>
              Simple VR with React 360
            </Text>
            <Text  style={styles.attractionText}>
              Click Me to Start
            </Text>
          </VrButton>
        </View>
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
