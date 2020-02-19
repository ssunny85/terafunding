<template>
  <div class="filter">
    <div class="filter__inner">
      <div class="filter__item">
        <h2 class="filter__label">상품유형</h2>
        <div class="filter__check">
          <span class="checkbox checkbox--all">
            <input type="checkbox"
                   id="contract-all"
                   v-model="contractAll"
                   @change="handleContractAll" />
            <label for="contract-all">전체</label>
          </span>
          <span class="checkbox">
            <input type="checkbox"
                   id="contract-funds"
                   value="건축자금"
                   v-model="contractTypes" />
            <label for="contract-funds">건축자금</label>
          </span>
          <span class="checkbox">
            <input type="checkbox"
                   id="contract-guarantee"
                   value="부동산담보"
                   v-model="contractTypes" />
            <label for="contract-guarantee">부동산담보</label>
          </span>
        </div>
      </div>
      <div class="filter__item">
        <h2 class="filter__label">채권상태</h2>
        <div class="filter__check">
          <span class="checkbox checkbox--all">
            <input type="checkbox"
                   id="status-all"
                   v-model="statusAll" />
            <label for="status-all">전체</label>
          </span>
          <span class="checkbox">
            <input type="checkbox"
                   id="status-waiting"
                   value="대기중"
                   v-model="typedStatuses" />
            <label for="status-waiting">대기중</label>
          </span>
          <span class="checkbox">
            <input type="checkbox"
                   id="status-recruiting"
                   value="모집중"
                   v-model="typedStatuses" />
            <label for="status-recruiting">모집중</label>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductFilter',
  data() {
    return {
      contractAll: false,
      statusAll: false,
      contractTypes: [],
      typedStatuses: [],
    };
  },
  methods: {
    handleContractAll() {
      if (this.contractAll) {
        this.contractTypes = ['건축자금', '부동산담보'];
      } else {
        this.contractTypes = [];
      }
    },
  },
  watch: {
    contractTypes: {
      handler(value) {
        this.$emit('change-contract-types', value);
      },
      deep: true,
    },
    typedStatuses: {
      handler(value) {
        this.$emit('change-typed-statuses', value);
      },
      deep: true,
    },
  },
};
</script>

<style src="./style.scss" lang="scss" scoped />
