import { shallowMount } from '@vue/test-utils'
import AppHeader from '@/components/AppHeader.vue'

describe('AppHeader.vue', () => {
  it('renders title correctly', async () => {
    const msg = 'new message'
    const wrapper = shallowMount(AppHeader, {
      propsData: { 'title': msg }
    })
    expect(wrapper.find('#title').text()).toBe(msg)
  })

  it('renders status correctly', () => {
    const status = 'connection'
    const wrapper = shallowMount(AppHeader, {
      propsData: { 'status': status }
    })
    expect(wrapper.get('#status').text()).toBe(status)
  })

  it('renders connection status badge correctly', () => {
    const status = 'connection'
    const wrapper = shallowMount(AppHeader, {
      propsData: { 'status': status }
    })
    expect(wrapper.get('#status').classes('badge-warning')).toBe(true)
  })

  it('renders connected status badge correctly', () => {
    const status = 'connected'
    const wrapper = shallowMount(AppHeader, {
      propsData: { 'status': status }
    })
    expect(wrapper.get('#status').classes('badge-success')).toBe(true)
  })

  it('renders other status badge correctly', () => {
    const status = 'other'
    const wrapper = shallowMount(AppHeader, {
      propsData: { 'status': status }
    })
    expect(wrapper.get('#status').classes('badge-secondary')).toBe(true)
  })
  
})
