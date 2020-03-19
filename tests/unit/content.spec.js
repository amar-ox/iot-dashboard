import { shallowMount } from '@vue/test-utils'
import Content from '@/components/Content.vue'

describe('AppHeader.vue', () => {
  it('renders passed data if not empty', () => {
    const data = [ { "temp": 12 } ]
    const wrapper = shallowMount(Content, {
      propsData: { 'data': data }
    })
    expect(wrapper.find('p').text()).toBe(JSON.stringify(data))
  })

  it('renders descriptino message when data is empty', () => {
    const data = []
    const wrapper = shallowMount(Content, {
      propsData: { 'data': data }
    })
    expect(wrapper.find('p').text()).toBe('Dashboard presentation...')
  })
})
