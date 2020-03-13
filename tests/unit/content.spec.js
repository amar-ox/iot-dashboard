import { shallowMount } from '@vue/test-utils'
import Content from '@/components/Content.vue'

describe('AppHeader.vue', () => {
  it('renders props.data when passed', () => {
    const data = { "temp": 12 }
    const wrapper = shallowMount(Content, {
      propsData: { 'data': data }
    })
    expect(wrapper.find('p').text()).toBe(JSON.stringify(data))
  })
})
