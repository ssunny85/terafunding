<template>
  <div class="filter">
    <div class="filter__inner">
      <div class="filter__item">
        <h2 class="filter__label">상품유형</h2>
        <div class="filter__check">
          <span class="checkbox checkbox--all">
            <input
              type="checkbox"
              id="contract-all"
              v-model="contractAll"
              @change="handleContractAll" />
            <label for="contract-all">전체</label>
          </span>
          <template v-for="option in contractOptions">
            <span class="checkbox" :key="option.id">
              <input
                type="checkbox"
                :id="option.id"
                :value="option.label"
                v-model="contractTypes" />
              <label :for="option.id">{{ option.label }}</label>
            </span>
          </template>
        </div>
      </div>
      <div class="filter__item">
        <h2 class="filter__label">채권상태</h2>
        <div class="filter__check">
          <span class="checkbox checkbox--all">
            <input
              type="checkbox"
              id="status-all"
              v-model="statusAll"
              @change="handleStatusAll" />
            <label for="status-all">전체</label>
          </span>
          <template v-for="option in statusOptions">
            <span class="checkbox" :key="option.id">
              <input
                type="checkbox"
                :id="option.id"
                :value="option.label"
                v-model="typedStatuses" />
              <label :for="option.id">{{ option.label }}</label>
            </span>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const contractOptions = [
  {
    id: 'contract-funds',
    label: '건축자금',
  },
  {
    id: 'contract-guarantee',
    label: '부동산담보',
  },
];
const statusOptions = [
  {
    id: 'status-waiting',
    label: '대기중',
  },
  {
    id: 'status-recruiting',
    label: '모집중',
  },
];

export default {
  name: 'ProductFilter',
  data() {
    return {
      contractOptions,
      statusOptions,
      contractAll: false,
      statusAll: false,
      contractTypes: [],
      typedStatuses: [],
    };
  },
  methods: {
    handleContractAll() {
      this.contractTypes = this.contractAll
        ? this.contractOptions.map((option) => option.label) : [];
    },
    handleStatusAll() {
      this.typedStatuses = this.statusAll
        ? this.statusOptions.map((option) => option.label) : [];
    },
  },
  watch: {
    contractTypes: {
      handler(value) {
        this.contractAll = value.length === this.contractOptions.length;
        this.$emit('change-contract-types', value);
      },
      deep: true,
    },
    typedStatuses: {
      handler(value) {
        this.statusAll = value.length === this.statusOptions.length;
        this.$emit('change-typed-statuses', value);
      },
      deep: true,
    },
  },
};
</script>

<style src="./style.scss" lang="scss" scoped />
