import getProducts from '@/api/product';

describe('product.js test', () => {
  it('contractTypes 필수값 체크', () => {
    // given
    const request = {
      criteria: {},
    };
    // when
    const result = () => getProducts(request);
    // then
    expect(result).toThrow('contractTypes는 필수 값 입니다.');
  });

  it('typedStatuses 필수값 체크', () => {
    // given
    const request = {
      criteria: {
        contractTypes: [],
      },
    };
    // when
    const result = () => getProducts(request);
    // then
    expect(result).toThrow('typedStatuses는 필수 값 입니다.');
  });

  it('criteria 조건이 없을 경우 체크', () => {
    // given
    const request = {
      criteria: {
        contractTypes: [],
        typedStatuses: [],
      },
      paging: {
        no: 1,
        limit: 5,
      },
    };
    // when
    const result = getProducts(request);
    // then
    expect(result.total).toBe(24);
  });
  it('상품유형: 부동산담보, 채권상태: 모집중 인 경우 체크', () => {
    // given
    const request = {
      criteria: {
        contractTypes: ['부동산담보'],
        typedStatuses: ['모집중'],
      },
      paging: {
        no: 1,
        limit: 5,
      },
    };
    // when
    const result = getProducts(request);
    // then
    expect(result.total).toBe(10);
    expect(result.list.length).toBe(request.paging.limit);
  });
});
