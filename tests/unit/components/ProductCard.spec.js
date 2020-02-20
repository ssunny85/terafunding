import { shallowMount } from '@vue/test-utils';
import ProductCard from '@/components/ProductCard/index.vue';

describe('ProductFilter 컴포넌트 테스트', () => {
  it('product props 체크', () => {
    const productDummy = {
      id: 1,
      title: '제3053차 성남 삼평동 봇들마을이지더원2단지아파트 담보상품',
      typedStatus: '모집중',
      rateOfReturn: 8.1,
      loanPeriod: 6,
      targetAmount: 140000000,
      contractType: '부동산담보',
      grade: 'A2',
      url: 'https://cdn.terafunding.com/UploadedFiles/19-LN-3223/19-LN-3223_20190829115229922.jpg',
      soldOutSoon: 'TRUE',
      currentRate: 65,
    };
    const wrapper = shallowMount(ProductCard, {
      stubs: ['router-link'],
      propsData: {
        product: productDummy,
      },
    });
    expect(wrapper.find('.card__badge').text()).toBe('마감임박');
    expect(wrapper.find('.card__title').text()).toBe(productDummy.title);
    expect(wrapper.find('.btn-point').text()).toBe('바로투자');
    expect(wrapper.find('.rate').text()).toBe(`${productDummy.rateOfReturn}%`);
    expect(wrapper.find('.loan-period').text()).toBe(`${productDummy.loanPeriod}개월`);
    expect(wrapper.find('.amount').text()).toBe('1.4억');
    expect(wrapper.find('.grade').text()).toBe(productDummy.grade);
    expect(wrapper.find('.card__picture > img').attributes('src')).toBe(productDummy.url);
    expect(wrapper.find('.card__progress-bar > .guide').text()).toBe(`${productDummy.currentRate}% 달성`);
  });
});
describe('ProductFilter 컴포넌트 computed 테스트', () => {
  it('typedStatus가 모집중 상태일 때, isBondStatus computed 테스트', () => {
    const wrapper = shallowMount(ProductCard, {
      stubs: ['router-link'],
      propsData: {
        product: {
          typedStatus: '모집중',
        },
      },
    });
    const result = wrapper.vm.isBondStatus;
    expect(result).toBe(true);
  });
  it('typedStatus가 모집중이 아닐 때, isBondStatus computed 테스트', () => {
    const wrapper = shallowMount(ProductCard, {
      stubs: ['router-link'],
      propsData: {
        product: {
          typedStatus: '대기중',
        },
      },
    });
    const result = wrapper.vm.isBondStatus;
    expect(result).toBe(false);
  });
  it('currentRate 값에 따른 progressbar width computed 테스트', () => {
    const currentRateDummy = 30;
    const wrapper = shallowMount(ProductCard, {
      stubs: ['router-link'],
      propsData: {
        product: {
          currentRate: currentRateDummy,
        },
      },
    });
    const result = wrapper.vm.progressBarWidth;
    expect(result).toBe(`width: ${currentRateDummy}%`);
  });
  it('currentRate 값에 따른 현재 달성률 표시 위치 currentRatePosition computed 테스트', () => {
    const currentRateDummy = 90;
    const wrapper = shallowMount(ProductCard, {
      stubs: ['router-link'],
      propsData: {
        product: {
          currentRate: currentRateDummy,
        },
      },
    });
    const result = wrapper.vm.currentRatePosition;
    expect(result).toBe(`right: ${100 - currentRateDummy}%`);
  });
  it('현재 달성률 말풍선 위치를 결정하는 isCurrentRateRightClass computed 테스트', () => {
    const currentRateDummy = 85;
    const wrapper = shallowMount(ProductCard, {
      stubs: ['router-link'],
      propsData: {
        product: {
          currentRate: currentRateDummy,
        },
      },
    });
    const result = wrapper.vm.isCurrentRateRightClass;
    expect(result).toBe(true);
  });
});
