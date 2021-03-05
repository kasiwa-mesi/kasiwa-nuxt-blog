<template>
    <div class="index">

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