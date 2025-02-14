import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { GenericTemplate, MaterialAppbarButtons, Item } from '../../components';
import { HomeSliderContainer, FeaturedCategoriesContainer } from './containers';
import { ThemeContext } from '../../theme';
import { magento } from '../../magento';
import Status from '../../magento/Status';
import {
  NAVIGATION_SEARCH_SCREEN,
  NAVIGATION_LOGIN_SCREEN,
  NAVIGATION_CART_SCREEN
} from '../../navigation/types';
import { translate } from '../../i18n';

/**
 * First screen which is shown to user, this component is
 * responsible for setting styling and layout.
 * Displays featured content and navigation to browse products
 *
 * @param {Object} props              - props related to the component
 * @param {Object} props.status       - (From redux) status of the network
 *                                      request to fetch store information
 * @param {Object} props.errorMessage - (From redux) error message if network request
 *                                       failed.
 */
const HomeScreen = ({ status, errorMessage }) => {
  const theme = useContext(ThemeContext);
  return (
    <GenericTemplate scrollable status={status} errorMessage={errorMessage}>
      <View style={styles.imageSliderContainer(theme)}>
        <HomeSliderContainer />
      </View>
      <FeaturedCategoriesContainer />
    </GenericTemplate>
  );
};

HomeScreen.navigationOptions = ({ navigation }) => ({
  title: translate('homeScreen.title'),
  headerLeft: (
    <MaterialAppbarButtons>
      <Item
        title={translate('homeScreen.menu.drawer')}
        iconName="menu"
        onPress={() => navigation.toggleDrawer()}
      />
    </MaterialAppbarButtons>
  ),
  headerRight: (
    <MaterialAppbarButtons>
      <Item
        title={translate('homeScreen.menu.search')}
        iconName="search"
        onPress={() => navigation.navigate(NAVIGATION_SEARCH_SCREEN)}
      />
      <Item
        title={translate('homeScreen.menu.cart')}
        iconName="shopping-cart"
        onPress={() => (
          magento.isCustomerLogin()
            ? navigation.navigate(NAVIGATION_CART_SCREEN)
            : navigation.navigate(NAVIGATION_LOGIN_SCREEN)
        )}
      />
    </MaterialAppbarButtons>
  )
});

const styles = StyleSheet.create({
  imageSliderContainer: theme => ({
    height: theme.dimens.homePageSliderHeight
  })
});

HomeScreen.propTypes = {
  status: PropTypes.oneOf(Object.values(Status)).isRequired,
  errorMessage: PropTypes.string
};

HomeScreen.defaultProps = {
  errorMessage: ''
};

const mapStatetoProps = ({ home }) => {
  const { status, errorMessage } = home;
  return {
    status,
    errorMessage
  };
};

export default connect(mapStatetoProps)(HomeScreen);
