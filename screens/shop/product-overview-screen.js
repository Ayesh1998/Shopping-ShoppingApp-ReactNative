import React from "react";
import { FlatList, View, Text } from "react-native";
import { useSelector } from "react-redux";

const ProductsOverviewScreen = (props) => {
  const products = useSelector((state) => state.products.availableProducts);

  return (
    <View>
      <FlatList
        data={products}
        renderItem={(itemData) => <Text>{itemData.item.title}</Text>}
      />
    </View>
  );
};

ProductsOverviewScreen.navigationOptions = {
  headerTitle: "Products",
};

export default ProductsOverviewScreen;
