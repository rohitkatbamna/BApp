import react, { useState } from "react";
import { Text, View } from "react-native";

import { Button, Menu, Divider, Provider } from "react-native-paper";

function DropDownmenu() {
	const [visible, setVisible] = useState(false);
	const openMenu = () => setVisible(true);
	const closeMenu = () => setVisible(false);
	return (
		<Provider>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "center",
				}}>
				<Menu
					visible={visible}
					onDismiss={closeMenu}
					anchor={<Button onPress={openMenu}>Show Course</Button>}>
					<Menu.Item onPress={() => {}} title="Item 1" />
					<Menu.Item onPress={() => {}} title="Item 2" />
					<Divider />
					<Menu.Item onPress={() => {}} title="Item 3" />
				</Menu>
			</View>
		</Provider>
	);
}
function VirtualClassroom() {
	return (
		<>
			<DropDownmenu />
			<DropDownmenu />
			<DropDownmenu />
		</>
	);
}
export default VirtualClassroom;
