<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: '테라펀딩',
    titleTemplate: (titleChunk) => (titleChunk ? `${titleChunk}` : '테라펀딩'),
    htmlAttrs: {
      lang: 'ko',
    },
    meta: [
      { charset: 'utf-8' },
      { vmid: 'keywords', name: 'keywords', content: '테라펀딩, 테라핀테크, P2P투자, P2P대출, 부동산투자, P2P업계1위' },
      { vmid: 'description', name: 'description', content: '건축주와 투자자를 연결하는 새로운 금융 플랫폼 테라펀딩은 자금이 필요한 중소형 건축주들과 새로운 투자처가 필요한 소액 투자자들을 연결해주는 P2P 금융 플랫폼입니다.' },
    ],
  },
};
</script>

<style src="./assets/scss/terafunding.scss" lang="scss" />
