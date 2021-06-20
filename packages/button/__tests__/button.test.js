import { mount } from '@vue/test-utils';
import Button from '../src/button.vue';

describe('button.vue', () => {
  test('button content', () => {
    const button = mount(Button, {
      slots: {
        default: 'Main Content',
      },
    });
    expect(button.html()).toContain('Main Content');
  });
});
