const fetch_article = {
    getArticleNumber($content) {
        return new Promise(async (resolve, reject) => {
            const articles = await $content('/').fetch()
            resolve(articles.length)
        })
    },
    getArticleList($content, skip, limit) {
        return new Promise(async (resolve, reject) => {
            const article_list = await $content('/')
                .only(['title', 'description', 'category', 'slug', 'eyecatch', 'eyecatchWebP', 'createdAt'])
                .skip(skip)
                .limit(limit)
                .fetch()
            resolve(article_list)
        })
    },
    async getArticle($content, slug) {
        return new Promise(async (resolve, reject) => {
            const article = await $content('/', slug)
                .fetch()
            resolve(article)
        })
    }
}

export default fetch_article