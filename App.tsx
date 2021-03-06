import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { RootDrawerParams } from "./assets/scripts/types/RootDrawerParams";
import { HomeScreen } from "./assets/scripts/screens/HomeScreen";
import { SettingsScreen } from "./assets/scripts/screens/SettingsScreen";
import { BeachMap } from "./assets/scripts/screens/BeachMapScreen";
import { DetailedBeach } from "./assets/scripts/screens/DetailedBeachScreen";
import { MapContainer } from "./assets/scripts/state/MapState";
import { SettingsContainer } from "./assets/scripts/state/SettingsState";
import { SearchContainer } from "./assets/scripts/state/SearchBarState";

/* 
This is the entry point for the application.
*/

const Drawer = createDrawerNavigator<RootDrawerParams>();

export default function App() {
  return (
    <SettingsContainer.Provider>
      <MapContainer.Provider>
        <SearchContainer.Provider>
          <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
              <Drawer.Screen name="Home" component={HomeScreen} />

              <Drawer.Screen
                name="BeachMap"
                component={BeachMap}
                options={{ title: "Beach Map" }}
              />

              <Drawer.Screen name="Settings" component={SettingsScreen} />
              <Drawer.Screen
                name="DetailedBeach"
                options={{ title: "" }} //In the strongly typed version of create(x)Navigator there is no overload to pass in options to hide screens
                component={DetailedBeach}
              />
            </Drawer.Navigator>
          </NavigationContainer>
        </SearchContainer.Provider>
      </MapContainer.Provider>
    </SettingsContainer.Provider>
  );
}
