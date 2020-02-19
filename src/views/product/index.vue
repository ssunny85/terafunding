<template>
  <div class="container">
    <product-filter
      @change-contract-types="changeContractTypes"
      @change-typed-statuses="changeTypedStatuses">
    </product-filter>
    <div class="product-wrap">
      <p class="product__total">
        총 <strong class="point">{{ products.total }}</strong>건의 상품이 검색되었습니다.
      </p>
      <ul class="product__list">
        <li class="product__item"
            v-for="(product, index) in products.list"
            :key="index">
          <product-card :product="product"></product-card>
        </li>
      </ul>
      <div class="product__bottom">
        <button
          type="button"
          class="btn btn-more"
          v-show="isShowMore"
          @click="handleListMore">
          더보기({{ requestData.paging.no }}/{{ products.totalPage }})
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ProductFilter from '@/components/ProductFilter/index.vue';
import ProductCard from '@/components/ProductCard/index.vue';
import getProducts from '../../api/product';

const PAGING_LIMIT = 5;

export default {
  name: 'ProductList',
  components: {
    ProductFilter,
    ProductCard,
  },
  data() {
    return {
      requestData: {
        paging: {
          no: 1,
          limit: PAGING_LIMIT,
        },
        criteria: {
          contractTypes: [],
          typedStatuses: [],
        },
      },
      products: null,
    };
  },
  metaInfo: {
    title: '상품 목록',
  },
  created() {
    this.fetchData();
  },
  computed: {
    isShowMore() {
      return this.products.totalPage !== this.requestData.paging.no;
    },
  },
  methods: {
    fetchData() {
      this.products = getProducts(this.requestData);
    },
    handleListMore() {
      if (this.requestData.paging.no < this.products.totalPage) {
        this.requestData.paging.no += 1;
      }
      this.products.list = this.products.list.concat(getProducts(this.requestData).list);
    },
    changeContractTypes(data) {
      this.requestData.criteria.contractTypes = [...data];
      this.requestData.paging.no = 1;
      this.products = getProducts(this.requestData);
    },
    changeTypedStatuses(data) {
      this.requestData.criteria.typedStatuses = [...data];
      this.requestData.paging.no = 1;
      this.products = getProducts(this.requestData);
    },
  },
};
</script>

<style src="./style.scss" lang="scss" scoped />
