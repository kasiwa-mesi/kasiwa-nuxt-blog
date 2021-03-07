<template>
    <article class="article w-auto bg-white my-4 md:mx-4 p-4 rounded-md shadow-md box-border">
        <h1 class="font-bold text-3xl">{{ data.title }}</h1>
        <picture>
          <source type="image/webp" :srcset="data.eyecatchWebP" class="my-4" />
          <source type="image/jpeg" :srcset="data.eyecatch" class="my-4" />
          <img :src="data.eyecatch" alt="" />
        </picture>
        <nuxt-content :document="data"></nuxt-content>
    </article>
</template>

<script>
export default {
    props: ['data'],
}
</script>

<style>
.nuxt-content h2 {
    @apply font-bold;
    @apply text-2xl;
    @apply my-8;
}

.nuxt-content ul {
  @apply list-disc;
  @apply list-inside;
  @apply ml-2;
}

.nuxt-content p {
  @apply my-4;
}
</style>