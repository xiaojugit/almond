import EButton from '..';

export default {
  title: 'Components/Button',
  component: EButton,
};

const Template = <T>(args: T) => ({
  components: { EButton },
  setup() {
    return { args };
  },
  template: '<e-button v-bind="args">Primary</e-button>',
});

export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };
