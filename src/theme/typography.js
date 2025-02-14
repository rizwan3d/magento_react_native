import { Platform } from 'react-native';
import colors from './colors';

const fontFamily = Platform.select({ android: 'sans-serif', ios: 'Helvetica' });
const fontWeightRegular = 'normal';
const fontWeightSemiBold = '600';
const fontWeightBold = 'bold';

const appbarTitleTextColor = colors.appbarTintColor;
const titleTextColor = colors.titleText;
const bodyTextColor = colors.bodyText;
const labelTextColor = colors.labelText;

export default {
  /**
   * Title is reserved for the title of a screen(Toolbar)
   * and the titles of Modal dialogs.
   */
  titleText: {
    fontFamily,
    color: appbarTitleTextColor,
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: fontWeightRegular,
  },
  titleTextBold: {
    fontFamily,
    color: appbarTitleTextColor,
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: fontWeightBold,
  },
  /**
   * Use the Heading style for card titles.
   */
  headingText: {
    fontFamily,
    color: titleTextColor,
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: fontWeightRegular,
  },
  headingTextBold: {
    fontFamily,
    color: titleTextColor,
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: fontWeightBold,
  },
  /**
   * Use the Subheading style to denote new sections within cards.
   */
  subheadingText: {
    fontFamily,
    color: titleTextColor,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: fontWeightRegular,
  },
  subheadingTextBold: {
    fontFamily,
    color: titleTextColor,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: fontWeightBold,
  },
  /**
   * The Body text style is used widely throughout the UI.
   * Any text that isn’t a title, heading, subheading, label
   * would generally use the Body style.
   */
  bodyText: {
    fontFamily,
    color: bodyTextColor,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: fontWeightRegular,
  },
  bodyTextSemiBold: {
    fontFamily,
    color: bodyTextColor,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: fontWeightSemiBold,
  },
  bodyTextBold: {
    fontFamily,
    color: bodyTextColor,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: fontWeightBold,
  },
  /**
   * Use labels with form field and input elements to
   * signify the element’s function to the user.
   */
  labelText: {
    fontFamily,
    color: labelTextColor,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: fontWeightRegular,
  },
  labelTextBold: {
    fontFamily,
    color: labelTextColor,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: fontWeightBold,
  },
  /**
   * Text style meant to be used only for Button component
   */
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 2,
    paddingBottom: 1,
    ...Platform.select({
      android: {
        fontFamily: 'sans-serif-medium',
      },
      default: {
        fontSize: 18,
      },
    }),
  },
  /**
   * Text style meant for TextInput component
   */
  textInput: {
    color: colors.black,
    fontSize: 18,
  }
};
