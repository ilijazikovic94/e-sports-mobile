
import React, {Component} from 'react';
import {Text,View} from 'react-native';

export default class SideBar extends Component{

    constructor(){
        super();
        this.closeControlPanel = this.closeControlPanel.bind(this);
        this.openControlPanel = this.openControlPanel.bind(this);
    }

    

    render()
    {
        const drawerStyles = {
            drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
            main: {paddingLeft: 3},
        }

        return (
            <Drawer
                type="static"
                content={<SideBarContent />}
                ref = {(ref) => this._drawer = ref}
                openDrawerOffset={100}
                styles={drawerStyles}
                tweenHandler={Drawer.tweenPresets.parallax}
            >
                <View>
                <Text onPress={this.openControlPanel}>
                    Drawer
                </Text>
                </View>
            </Drawer>
        );
    }
}