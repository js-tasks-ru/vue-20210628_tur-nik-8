import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const ClickCounter = defineComponent({
  name: 'counter',
  data() {
    return {
      clickCount: 0,
    };
  },

  template: '<button @click="clickCount++" type="button">{{ clickCount }}</button>',
});

createApp(ClickCounter).mount('#app');
