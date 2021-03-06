import React, {Component} from 'react';
import {
  View,
  Button,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableNativeFeedback,
  Keyboard,
  Dimensions,
  ScrollView,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Swiper from 'react-native-web-swiper';

const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },

  menubar: {
    flex: 1,
    width: 50,
    backgroundColor: '#B8B8B8',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchbar: {
    flex: 0.7,
  },
  mainbar: {
    flex: 8.3,
    backgroundColor: '#E1E1E1',
  },
  textinputcontainer: {
    paddingHorizontal: 10,
    borderRadius: 6,
    marginBottom: 20,
    backgroundColor: 'rgb(238,237,237)',
  },
  textinput: {
    backgroundColor: 'white',
    height: 45,
    width: 390,
    padding: 10,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
  },
  carticon: {
    position: 'absolute',
    height: 20,
    width: 20,
    borderRadius: 20,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  tieude: {
    height: 45,
    backgroundColor: 'white',
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 11,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  back: {
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texttieude: {
    height: 45,
    width: 285,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  sanpham: {
    height: 200,
    backgroundColor: 'white',
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    
  },
  imageproduct: {
    height: 180,
    width: 120,
    backgroundColor: 'white',
    justifyContent: 'center',
    marginTop:10,
    marginLeft:20,
    marginRight:10
  },
  communicationProduct: {
    height: 140,
    width: 200,
    backgroundColor: 'white',
    marginTop:30,
    justifyContent: 'space-between',
  },
  sizeimage:{
    width: 120, height: 160
  }
});

export default class Product extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <StatusBar hidden={true} />
          <View style={styles.menubar}>
            <View style={{justifyContent: 'flex-start'}}>
              <TouchableOpacity
                onPress={() => this.props.navigation.toggleDrawer()}>
                <Image
                  source={require('../Image/menu.png')}
                  style={{width: 40, height: 40}}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Cart')}>
              <View style={{justifyContent: 'flex-end'}}>
                <View style={styles.carticon}>
                  <Text>0</Text>
                </View>
                <Image
                  source={require('../Image/shopping-bag.png')}
                  style={{width: 40, height: 40}}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.searchbar}>
          <View style={styles.textinputcontainer}>
            <TextInput style={styles.textinput} placeholder="search" />
          </View>
        </View>
        <View style={styles.mainbar}>
          <ScrollView>
            <View>
              <View style={styles.tieude}>
                <View style={styles.back}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Home')}>
                    <Image
                      source={require('../Image/back.png')}
                      style={{width: 38, height: 38}}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.texttieude}>
                  <Text style={{fontSize: 30, color: 'grey'}}>Product</Text>
                </View>
              </View>
              <View style={styles.sanpham}>
                <View style={styles.imageproduct}>
                  <Image
                    source={require('../Image/ao1.jpg')}
                    style={styles.sizeimage}
                  />
                </View>
                <View style={styles.communicationProduct}>
                  <Text style={{fontSize: 20, color: 'grey'}}> Áo Thun</Text>
                  <Text style={{fontSize: 18, color: 'green'}}> 20$</Text>
                  <Text style={{fontSize: 18, color: 'black'}}> Full size</Text>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style={{fontSize: 18, color: 'red'}}>
                      {' '}
                      SHOWDERTAILS{' '}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.sanpham}>
                <View style={styles.imageproduct}>
                  <Image
                    source={require('../Image/ao2.jpg')}
                    style={styles.sizeimage}
                  />
                </View>
                <View style={styles.communicationProduct}>
                  <Text style={{fontSize: 20, color: 'grey'}}> Áo Dài Tay</Text>
                  <Text style={{fontSize: 18, color: 'green'}}> 20$</Text>
                  <Text style={{fontSize: 18, color: 'black'}}> Full size</Text>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style={{fontSize: 18, color: 'red'}}>
                      {' '}
                      SHOWDERTAILS{' '}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.sanpham}>
                <View style={styles.imageproduct}>
                  <Image
                    source={require('../Image/ao3.jpg')}
                    style={styles.sizeimage}
                  />
                </View>
                <View style={styles.communicationProduct}>
                  <Text style={{fontSize: 20, color: 'grey'}}>
                    {' '}
                    Áo Free Style
                  </Text>
                  <Text style={{fontSize: 18, color: 'green'}}> 50$</Text>
                  <Text style={{fontSize: 18, color: 'black'}}> Full size</Text>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style={{fontSize: 18, color: 'red'}}>
                      {' '}
                      SHOWDERTAILS{' '}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
