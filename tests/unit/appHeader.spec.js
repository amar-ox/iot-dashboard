import { shallowMount } from '@vue/test-utils'
import AppHeader from '@/components/AppHeader.vue'

describe('AppHeader.vue', () => {
  it('renders props.title when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(AppHeader, {
      propsData: { 'title': msg }
    })
    expect(wrapper.find('h1').text()).toBe(msg)
  })
})
