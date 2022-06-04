import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/loginScreen";
import ForgetPasswordScreen from "./screens/forgetPasswordScreen";
import MultipleRoleScreen from "./screens/multipleRoleScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

function App() {
	return (
		<NavigationContainer>
			<Drawer.Navigator defaultScreenOptions="LoginScreen">
				<Drawer.Screen
					name="LoginScreen"
					component={LoginScreen}
					options={{ title: "" }}
				/>
				<Drawer.Screen
					name="ForgetPasswordScreen"
					component={ForgetPasswordScreen}
					options={{ title: "Forgot Password" }}
				/>
				<Drawer.Screen
					name="MultipleRoleScreen"
					component={MultipleRoleScreen}
					options={{ title: "" }}
				/>
			</Drawer.Navigator>
		</NavigationContainer>
	);
}

export default App;
