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
  }
}
</script>

<style>
</style>