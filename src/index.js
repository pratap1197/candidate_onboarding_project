/**
 * @format
 */
 import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name } from './app.json';
import { YellowBox } from "react-native"


YellowBox.ignoreWarnings(["Warning: ..."])
//LogBox.ignoreAllLogs(true)
console.disableYellowBox = true;
console.ignoredYellowBox = ['Warning: Each'];
AppRegistry.registerComponent(name, () => App);
AppRegistry.runApplication(name, {
   rootTag: document.getElementById('root'),
 });
