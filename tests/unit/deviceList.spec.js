import { shallowMount } from '@vue/test-utils'
import DeviceList from '@/components/DeviceList.vue'

describe('DeviceList.vue', () => {
  it('renders props.title when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(DeviceList, {
      propsData: { 'title': msg }
    })
    expect(wrapper.find('h3').text()).toBe(msg)
  })
})
