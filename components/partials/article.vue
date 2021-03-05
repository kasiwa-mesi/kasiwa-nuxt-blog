<template>
  <div>
    <nuxt-link :to="'/' + slug" class="flex py-4 flex-col md:flex-row">
      <div class="box-img">
        <img :src="eyecatch" class="w-full py-2 md:py-0 rounded-lg" />
      </div>
      <div class="detail md:mx-4">
        <p>
          {{createdAt}}
        </p>
        <p class="font-bold text-2xl my-2">{{title}}</p>
        <p class="text-gray-600">{{description}}</p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
    props: ['eyecatch', 'title', 'description', 'slug', 'createdAt']
}
</script>