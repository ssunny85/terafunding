import { shallowMount } from '@vue/test-utils';
import ProductFilter from '@/components/ProductFilter/index.vue';

describe('ProductFilter 컴포넌트의 상품유형 테스트', () => {
  it('상품유형 옵션값이 비었을 경우', () => {
    const wrapper = shallowMount(ProductFilter, {
      data() {
        return {
          contractOptions: [],
        };
      },
    });
    const result = wrapper.findAll('.filter__check').at(0).text();
    expect(result).toEqual('전체');
  });
  it('상품유형 옵션값이 있을 경우', () => {
    const wrapper = shallowMount(ProductFilter, {
      data() {
        return {
          contractOptions: [
            { id: '1', label: 'item1' },
            { id: '2', label: 'item2' },
          ],
        };
      },
    });
    const result = wrapper.findAll('.filter__check').at(0);
    expect(result.findAll('span').length).toBe(3);
    expect(result.text()).toEqual('전체  item1 item2');
  });
  it('handleContractAll 메소드 테스트', () => {
    const wrapper = shallowMount(ProductFilter, {
      data() {
        return {
          contractOptions: [
            { id: '1', label: 'item1' },
            { id: '2', label: 'item2' },
          ],
          statusOptions: [],
        };
      },
    });
    wrapper.vm.contractAll = true;
    wrapper.vm.handleContractAll();
    const result1 = wrapper.vm.contractTypes;
    expect(result1).toEqual(['item1', 'item2']);

    wrapper.vm.contractAll = false;
    wrapper.vm.handleContractAll();
    const result2 = wrapper.vm.contractTypes;
    expect(result2).toEqual([]);
  });
});

describe('ProductFilter 컴포넌트의 채권상태 테스트', () => {
  it('채권상태 옵션값이 비었을 경우', () => {
    const wrapper = shallowMount(ProductFilter, {
      data() {
        return {
          statusOptions: [],
        };
      },
    });
    const result = wrapper.findAll('.filter__check').at(1).text();
    expect(result).toEqual('전체');
  });
  it('채권상태 옵션값이 있을 경우', () => {
    const wrapper = shallowMount(ProductFilter, {
      data() {
        return {
          statusOptions: [
            { id: '1', label: 'status item1' },
            { id: '2', label: 'status item2' },
          ],
        };
      },
    });
    const result = wrapper.findAll('.filter__check').at(1);
    expect(result.findAll('span').length).toBe(3);
    expect(result.text()).toEqual('전체  status item1 status item2');
  });
  it('handleStatusAll 메소드 테스트', () => {
    const wrapper = shallowMount(ProductFilter, {
      data() {
        return {
          contractOptions: [],
          statusOptions: [
            { id: '1', label: 'status item1' },
            { id: '2', label: 'status item2' },
          ],
        };
      },
    });
    wrapper.vm.statusAll = true;
    wrapper.vm.handleStatusAll();
    const result1 = wrapper.vm.typedStatuses;
    expect(result1).toEqual(['status item1', 'status item2']);

    wrapper.vm.statusAll = false;
    wrapper.vm.handleStatusAll();
    const result2 = wrapper.vm.typedStatuses;
    expect(result2).toEqual([]);
  });
});
