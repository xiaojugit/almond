import { mount } from '@vue/test-utils';
import ELedDigits from '../src/led-digits.vue';

describe('led-digits.vue', () => {
  test('Led Digits', () => {
    const button = mount(ELedDigits);
    expect(button.html()).toContain('div');
  });
});
