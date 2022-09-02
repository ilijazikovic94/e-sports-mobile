import * as React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { Header, Icon } from "react-native-elements";

class LeftComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginBottom: 2,
          paddingTop: 10
        }}
      >
        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
          <Icon name="bars" type="font-awesome" color="#fff"></Icon>
        </TouchableOpacity>
      </View>
    );
  }
}

class RightComponent extends React.Component {
  state = {
    iconName: 'ios-menu'
  };

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row"
        }}
      >
        <TouchableOpacity onPress={() => {}}>
            <Image source={ require('../assets/images/profile.png') } style={{ width: 40, height: 40, resizeMode: 'cover', alignSelf: 'center', borderRadius: 50, marginRight: 10 }}></Image>
        </TouchableOpacity>
      </View>
    );
  }
}

export default class HeaderView extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Header
        placement="left"
        containerStyle={{
            backgroundColor: '#28303f'
        }}
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={!this.props.headertitle ? <Image source={ require('../assets/images/logo.png') } style={{ width: 80, height: 40, resizeMode: 'contain', alignSelf: 'center' }} /> : {text: this.props.headertitle, style: { color: "#fff", fontSize: 20, alignSelf: 'center' }}}
        rightComponent={<RightComponent navigation={this.props.navigation} />}
      >
        <LeftComponent navigation={this.props.navigation} />
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  list_header: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    fontFamily: "Arial"
  }
});
