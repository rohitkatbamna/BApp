import react, { useRef } from "react";
import { Text, View } from "react-native";

import DropDown from "react-native-paper-dropdown";

function VirtualClassroom() {
	const [nightMode, setNightmode] = useState(false);
	const [showDropDown, setShowDropDown] = useState(false);
	const [gender, setGender] = useState < string > "";
	const [showMultiSelectDropDown, setShowMultiSelectDropDown] = useState(false);
	const [colors, setColors] = useState < string > "";
	const genderList = [
		{
			label: "Male",
			value: "male",
		},
		{
			label: "Female",
			value: "female",
		},
		{
			label: "Others",
			value: "others",
		},
	];
	const colorList = [
		{
			label: "White",
			value: "white",
		},
		{
			label: "Red",
			value: "red",
		},
		{
			label: "Blue",
			value: "blue",
		},
		{
			label: "Green",
			value: "green",
		},
		{
			label: "Orange",
			value: "orange",
		},
	];

	return (
		<DropDown
			label={"Gender"}
			mode={"outlined"}
			visible={showDropDown}
			showDropDown={() => setShowDropDown(true)}
			onDismiss={() => setShowDropDown(false)}
			value={gender}
			setValue={setGender}
			list={genderList}
		/>
	);
}
export default VirtualClassroom;
