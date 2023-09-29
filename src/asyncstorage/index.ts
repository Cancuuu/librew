// import AsyncStorage from "@react-native-async-storage/async-storage";

// export const getAsyncStorageObject = async (key: string) => {
// 	try {
// 		const jsonValue = await AsyncStorage.getItem(key);
// 		return jsonValue != null ? JSON.parse(jsonValue) : null;
// 	} catch (e) {
// 		console.log("Error getting data", e);
// 		throw new Error(`Error getting data ${e}`);
// 	}
// };

// export const setAsyncStorageObject = async ({ key, value }: any) => {
// 	try {
// 		const jsonValue = JSON.stringify(value);
// 		await AsyncStorage.setItem(key, jsonValue);
// 	} catch (e) {
// 		console.log("Error saving data", e);
// 		throw new Error(`Error saving data ${e}`);
// 	}
// };
