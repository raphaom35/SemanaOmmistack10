import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main from './src/pages/Main';
import Profile from './src/pages/Profile'

const Routes = createAppContainer(
    createStackNavigator({
        Main:{
            screen:Main,
            navigationOptions:{
                title:'DevRadar'
            }
        },
        Profile:{
            screen:Profile,
            navigationOptions:{
                title:'Perfil Github'
            } 
        },   
    },{
        defaultNavigationOptions:{
            headerTintColor:'#fff',
            headerTitleAlign:"center",
            headerStyle:{
                backgroundColor:'#7D40E7'
            }
        }
    })

)
export default Routes;