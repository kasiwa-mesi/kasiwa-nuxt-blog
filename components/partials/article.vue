<template>
    <article class="article w-auto bg-white my-4 md:mx-4 p-4 rounded-md shadow-md box-border">
        <nuxt-content :document="data"></nuxt-content>
    </article>
</template>

<script>
export default {
    props: ['data'],
}
</script>