import { App } from 'vue';
import LedDigits from './src/led-digits.vue';

LedDigits.install = (app: App) => {
  app.component(LedDigits.name, LedDigits);
};

export default LedDigits;
