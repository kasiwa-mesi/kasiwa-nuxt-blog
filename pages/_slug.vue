<template>
    <div class="index w-full bg-gray-300 md:px-4 lg:px-8 xl:px-32 flex flex-col lg:flex-row box-border">
        <article-content :data="article" />
    </div>
</template>

<script>
import fetchData from '~/lib/fetch'
import ArticleContent from '../components/partials/article-content.vue'

export default {
    data() {
        return {
            article: '',
        }
    },
    components: {
        ArticleContent
    },
    async fetch() {
        console.log(this.$route.params.slug)
        this.article = await fetchData.getArticle(
            this.$content,
            this.$route.params.slug
        )
    },
    head() {
        return {
            title: this.article.title,
            meta: [
                { hid: 'description', name: 'description', content: this.article.description },
                { hid: 'og:title', name: 'og:title', content: this.article.title },
                { hid: 'og:description', name: 'og:description', content: this.article.description },
                { hid: 'og:image', name: 'og:image', content: this.article.eyecatch },
                { hid: 'og:url', name: 'og:url', content: 'https://heuristic-allen-03da7c.netlify.app/' + this.article.slug },
                { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image'},
            ],
        }
    },
}
</script>