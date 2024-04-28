import React from 'react';
import { getHeaderTitle } from '@react-navigation/elements';
import { Appbar, Menu } from 'react-native-paper';

const CustomNavigationBar = ({ navigation, route, options, back }) => {
  const [visible, setVisible] = React.useState(false);
  const closeMenu = () => setVisible(false);
  const openMenu = () => setVisible(true);
  const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header>
      {back && <Appbar.BackAction onPress={navigation.goBack} />}
      <Appbar.Content title={title} />
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Appbar.Action
            icon="dots-vertical"
            onPress={openMenu}
          />
        }>
        <Menu.Item
          onPress={() => {
            navigation.navigate("Home")
          }}
          title="Home"
        />
        <Menu.Item
          onPress={() => {
            navigation.navigate("Detail")
          }}
          title="Detail"
        />
        <Menu.Item
          onPress={() => {
            console.log('Option 3 was pressed');
          }}
          title="Option 3"

        />
      </Menu>
    </Appbar.Header>
  );
}
CustomNavigationBar.defaultProps = {
    back: false, // Set a default value for the back prop if it's not provided
  };
export default CustomNavigationBar;
