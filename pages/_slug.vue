<template>
    <div class="index w-full bg-gray-400 md:px-4 lg:px-8 xl:px-32 flex flex-col lg:flex-row box-border">
        <Article :data="article" />
    </div>
</template>

<script>
import Article from '~/components/partials/article.vue'
import fetchData from '~/lib/fetch'

export default {
    data() {
        return {
            article: '',
        }
    },
    components: {
        Article
    },
    async fetch() {
        console.log(this.$route.params.slug)
        this.article = await fetchData.getArticle(
            this.$content,
            this.params.slug
        )
    },
    head() {
        return {
            title: this.article.title,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.article.title,
                },
            ],
        }
    },
}
</script>