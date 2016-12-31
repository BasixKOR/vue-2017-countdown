import Vue from 'vue'
import Hello from 'src/components/Countdown'

describe('Countdown.vue', () => {
  it('should render correct contents', () => {
    Vue.filter('two_digits', function (value) {
      if (value.toString().length <= 1) {
        return '0' + value.toString()
      }
      return value.toString()
    })
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Hello)
    })
    expect(vm.$el.querySelector('.parent .block .text').textContent)
      .to.equal('Days')
  })
})
