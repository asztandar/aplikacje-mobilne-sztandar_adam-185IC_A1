import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const window = Dimensions.get("window");

export const imageSliderSize = (value) => {
    wielkośćObrazka = value;
}

let wielkośćObrazka = 1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
  },
  image: {
    width: window.width,
    height: 300,
    resizeMode: "contain",
  },
  loadingImageContainer: {
    paddingTop: 30,
  },
  loadingImageExample:{
    paddingLeft: 5,
    borderWidth: 2,
    borderColor: '#519570',
    marginBottom: 30,
  },
  sliderImageContainer:{
    paddingTop: 30,
  },
  sliderContent:{
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  imageSliderExample:{
    width: wielkośćObrazka,
    height: wielkośćObrazka,
    resizeMode: "contain",
  },
  lazyRenderContainer:{
    paddingTop: 30,
  },
  icons:{
      flexDirection: 'row',
  },
  netInfoContainer:{
    paddingTop: 30,
    flex: 1,
  },
  netInfoContent:{
    borderWidth:2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 90,
  },
  asyncStorContainer:{
    paddingTop: 30,
  },
});

export default styles;
