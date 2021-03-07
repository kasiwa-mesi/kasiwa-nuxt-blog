<template>
    <div class="article-list w-auto bg-white my-4 md:mx-4 p-4 rounded-md shadow-md box-border divide-y divide-gray-400">
    <Article
        v-for="elem in article_list"
        :key="elem.id"
        :eyecatch="elem.eyecatch"
        :eyecatchWebP="elem.eyecatchWebP"
        :title="elem.title"
        :description="elem.description"
        :slug="elem.slug"
        :createdAt="elem.createdAt"
    />
    </div>
</template>

<script>
import fetchData from '~/lib/fetch'
import Article from '~/components/partials/article.vue'
export default {
    data() {
        return {
            article_number: 0,
            article_list: [],
        }
    },
    computed: {
        pageNumber() {
            return Math.floor(this.article_number / 10) + 1
        },
    },
    components: {
        Article,
    },
    async fetch() {
        await Promise.all([
            fetchData.getArticleNumber(this.$content),
            fetchData.getArticleList(this.$content, 0, 10),
        ]).then((values) => {
            this.article_number = values[0]
            this.article_list = values[1]
        })
    },
}
</script>