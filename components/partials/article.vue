<template>
  <div>
    <nuxt-link :to="'/' + slug" class="flex py-4 flex-col md:flex-row">
      <div class="box-img">
        <picture>
          <source type="image/webp" :srcset="eyecatchWebP" class="my-4" />
          <source type="image/jpeg" :srcset="eyecatch" class="my-4" />
          <img :src="eyecatch" alt="" />
        </picture>
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
    props: ['eyecatch', 'eyecatchWebP', 'title', 'description', 'slug', 'createdAt']
}
</script>