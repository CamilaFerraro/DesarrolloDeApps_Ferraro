import React from "react";
import PlaceNavigator from "./src/navigation/PlaceNavigator";
import { Provider } from "react-redux";
import store from "./src/store";
import { init } from "./db";

init ()
.then(()=> console.log("Database initialized")
.catch((err)=>{
  console.log("Database fail connect")
  console.log(err.message)
}))

export default function App() {
  return (
    <Provider store={store}>
      <PlaceNavigator/>
    </Provider>
  );
}