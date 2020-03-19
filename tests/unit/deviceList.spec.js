import { shallowMount } from '@vue/test-utils'
import DeviceList from '@/components/DeviceList.vue'

describe('DeviceList.vue', () => {
  it('renders list of devices when passed', () => {
    const msg = [
      {
        'name': 'device1',
        'label': 'label1',
        'data_labels': ['d1','d2']
      },
      {
        'name': 'device2',
        'label': 'label2',
        'data_labels': ['d1','d2']
      }
    ]
    const wrapper = shallowMount(DeviceList, {
      propsData: { 'data': msg }
    })
    expect(wrapper.findAll('li').length).toEqual(msg.length)
    expect(wrapper.findAll('li').at(1).get('#name').text()).toEqual(msg[1].name)
    expect(wrapper.findAll('li').at(1).get('#label').text()).toEqual(msg[1].label)
  })

  it('renders selected device correctly', () => {
    const msg = [
      {
        'name': 'device1',
        'label': 'label1',
        'data_labels': ['d1','d2']
      },
      {
        'name': 'device2',
        'label': 'label2',
        'data_labels': ['d1','d2']
      }
    ]
    const selected = 1
    const wrapper = shallowMount(DeviceList, {
      propsData: { 'data': msg },
      data () {
        return {
          'selected': selected
        }
      }
    })
    expect(wrapper.findAll('li').at(selected).get('a').classes('active')).toBe(true)
  })

  it('handles device click correctly', async () => {
    const msg = [
      {
        'name': 'device1',
        'label': 'label1',
        'data_labels': ['d1','d2']
      },
      {
        'name': 'device2',
        'label': 'label2',
        'data_labels': ['d1','d2']
      }
    ]
    const selected = -1
    const wrapper = shallowMount(DeviceList, {
      propsData: { 'data': msg },
      data () {
        return {
          'selected': selected
        }
      }
    })

    wrapper.findAll('li').at(0).get('a').trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.$data.selected).toEqual(0)
    //expect(wrapper.emitted('selected')).toHaveLength(2)

    wrapper.findAll('li').at(0).get('a').trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.$data.selected).toEqual(-1)
  })

})
