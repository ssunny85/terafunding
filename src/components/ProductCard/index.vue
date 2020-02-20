<template>
  <div class="card">
    <router-link to="" class="card__link">
      <span class="card__badge" v-if="product.soldOutSoon === 'TRUE'">
        마감임박
      </span>
      <p class="card__picture">
        <img :src="product.url" :alt="`${product.title} 건물 이미지`">
      </p>
      <div class="card__info">
        <div class="card__progress-bar">
          <span class="blind">현재 달성률:</span>
          <p :class="['guide', isCurrentRateRightClass ? 'right-position' : 'left-position']"
             v-if="product.currentRate"
             :style="currentRatePosition">
            {{ product.currentRate }}% 달성
          </p>
          <span class="value" :style="progressBarWidth"></span>
        </div>
        <div class="card__tag">
          <span class="tag">{{ product.contractType }}</span>
        </div>
        <div class="card__digit">
          <p class="card__digit__item">
            <span class="blind">연 수익률:</span>
            <strong class="rate">{{ product.rateOfReturn }}%</strong>
          </p>
          <p class="card__digit__item">
            <span class="blind">투자기간:</span>
            <strong class="loan-period">{{ product.loanPeriod }}개월</strong>
          </p>
          <p class="card__digit__item">
            <span class="blind">등급:</span>
            <strong class="grade">{{ product.grade }}</strong>
          </p>
          <p class="card__digit__item">
            <span class="blind">모집금액:</span>
            <strong class="amount">{{ product.targetAmount | amountUnit }}</strong>
          </p>
        </div>
        <strong class="card__title">{{ product.title }}</strong>
        <div class="card__button">
          <router-link to="" class="btn btn-default">상세보기</router-link>
          <button
            type="button"
            class="btn btn-point"
            v-if="isBondStatus">
            바로투자
          </button>
          <button
            type="button"
            class="btn btn-default"
            v-else
            :disabled="!isBondStatus">
            오픈예정
          </button>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import amountUnit from '@/lib/amountUnit';

const POSITION_LIMIT = 80;

export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      require: true,
      default: null,
    },
  },
  computed: {
    isBondStatus() {
      return this.product.typedStatus === '모집중';
    },
    progressBarWidth() {
      return `width: ${this.product.currentRate}%`;
    },
    currentRatePosition() {
      const rightPosition = 100 - this.product.currentRate;
      return this.product.currentRate <= POSITION_LIMIT
        ? `left: ${this.product.currentRate}%`
        : `right: ${rightPosition}%`;
    },
    isCurrentRateRightClass() {
      return this.product.currentRate > POSITION_LIMIT;
    },
  },
  filters: {
    amountUnit,
  },
};
</script>

<style src="./style.scss" lang="scss" scoped />
