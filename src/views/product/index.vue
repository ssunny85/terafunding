<template>
  <div class="product-wrap">
    <div class="product-filter">
      <div class="product-filter__inner">
        <div class="product-filter__item">
          <h2 class="product-filter__label">상품유형</h2>
          <span class="">
            <label for="contract-all">전체</label>
            <input type="checkbox" id="contract-all" />
          </span>
          <span class="">
            <label for="contract-funds">건축자금</label>
            <input type="checkbox" id="contract-funds" />
          </span>
          <span class="">
            <label for="contract-guarantee">부동산담보</label>
            <input type="checkbox" id="contract-guarantee" />
          </span>
        </div>
        <div class="">
          <h2 class="">채권상태</h2>
          <span class="">
            <label for="status-all">전체</label>
            <input type="checkbox" id="status-all" />
          </span>
          <span class="">
            <label for="status-waiting">대기중</label>
            <input type="checkbox" id="status-waiting" />
          </span>
          <span class="">
            <label for="status-recruiting">모집중</label>
            <input type="checkbox" id="status-recruiting" />
          </span>
        </div>
      </div>
    </div>
    <div class="product-list">
      <p></p>
      <div class="">

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  components: {},
  metaInfo: {
    title: '상품 목록',
  },
  data() {
    return {};
  },
};
</script>

<style src="./style.scss" lang="scss" scoped />
