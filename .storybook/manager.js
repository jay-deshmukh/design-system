import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import myTheme from './my-theme'; // My theme but i prefer using the default dark

addons.setConfig({
  theme: themes.dark,
});