import { addParameters,addDecorator } from '@storybook/react';
import { withContexts } from '@storybook/addon-contexts/react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { contexts } from './contexts';

addParameters({
  backgrounds: [
    { name: 'Default Theme', value: '#ffffff', default: true},
    { name: 'Dark Theme', value: '#050449'}
  ]
})

addDecorator(withContexts(contexts));
addDecorator(withKnobs);
addDecorator(withA11y);