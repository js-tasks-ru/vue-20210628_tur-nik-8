import {createApp, defineComponent} from './vendor/vue.esm-browser.js';

const Calculator = defineComponent({
  name: 'calculator',

  data() {
    return {
      numberA: 0,
      numberB: 0,
      operator: 'sum',
    };
  },

  computed: {
    result() {
      let result = 0;
      switch (this.operator) {
        case 'sum':
          result = this.numberA + this.numberB;
          break;
        case 'subtract':
          result = this.numberA - this.numberB;
          break;
        case 'multiply':
          result = this.numberA * this.numberB;
          break;
        case 'divide':
          if (0 !== this.numberB) {
            result = this.numberA / this.numberB;
          } else {
            result = NaN;
          }

          break;
        default:
          throw new Error('Неизвестный тип операции');
      }

      return result;
    },
  },

  template:
    '  <div class="row">\n' +
    '    <div class="col">\n' +
    '      <input v-model.number="numberA" type="number" />\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="col" style="display: flex; flex-direction: column; font-family: emoji">\n' +
    '      <label><input v-model="operator" type="radio" value="sum" /> ➕</label>\n' +
    '      <label><input v-model="operator" type="radio" value="subtract" /> ➖</label>\n' +
    '      <label><input v-model="operator" type="radio" value="multiply" /> ✖</label>\n' +
    '      <label><input v-model="operator" type="radio" value="divide" /> ➗</label>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="col">\n' +
    '      <input v-model.number="numberB" type="number" />\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="col">=</div>\n' +
    '\n' +
    '    <output class="col">{{ result }}</output>\n' +
    '  </div>',
});

createApp(Calculator).mount('#app');
