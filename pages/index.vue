<template>
  <div class="index bg-gray-200 md:px-4 lg:px-8 xl:px-32 flex flex-col lg:flex-row">
    <Articlelist />
  </div>
</template>

<script>
import Articlelist from '~/components/partials/article-list.vue'
export default {
  components: {
    Articlelist
  },
  head() {
    return {
      title: 'かしわのブログ',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'かしわのブログだよ。個人開発や使った技術についてまとめるよ。'
        },
        { hid: 'og:title', name: 'og:title', content: 'かしわのブログ' },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'かしわのブログだよ。個人開発や使った技術についてまとめるよ。'
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: 'https://res.cloudinary.com/kasiwa/ogp.png'
        },
        { hid: 'og:url', name: 'og:url', content: '' },
        { hid: 'og:site_name', name: 'og:site_name', content: 'かしわのブログ' },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ]
    }
  }
}
</script>

<style>
</style>