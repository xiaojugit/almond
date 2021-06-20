import ELedDigits from '..';

export default {
  title: 'Components/LedDigits',
  component: ELedDigits,
};

const Template = <T>(args: T) => ({
  components: { ELedDigits },
  setup() {
    return { args };
  },
  template: `<e-led-digits></e-led-digits>`,
});

export const digits = Template.bind({});
