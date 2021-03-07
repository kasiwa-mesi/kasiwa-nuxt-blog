# kasiwa-nuxt-blog

## 特徴

- nuxt/content モジュールを利用し、記事を markdown で管理できるようにしています。
- Web パフォーマンス(LightHouse により、計測)を意識して、読み込む画像を最適化している。

## Library

- Nuxt.js
- Tailwind CSS

## パフォーマンスを改善するために行ったこと

- TailwindCSS の最適化
- 画像最適化

### TailwindCSS の最適化

TailwindCSS はビルドサイズが大きいので、未使用の CSS を削除する。

> 参考 URL: [TailwindCSS 公式ドキュメント](https://tailwindcss.com/docs/optimizing-for-production)

#### 最適化するためには、行ったこと

tailwind.config.js において、"purge"の設定をする。

```
module.exports = {
    purge: {
        // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
        enabled: process.env.NODE_ENV === 'production',
        content: [
            'components/**/*.vue',
            'layouts/**/*.vue',
            'pages/**/*.vue',
            'plugins/**/*.js',
            'nuxt.config.js'
        ],
        theme: {},
        variants: {},
        plugins: [],
    }
}
```

### 画像最適化

![](https://res.cloudinary.com/kasiwa/result_1.png)

## ファイルの説明

- content: ブログに投稿される記事を保存するファイル。全て markdown 形式です。
- lib: nuxt/content モジュールを活用して、markdown ファイルを取得する処理を記述してます。
- store: Vuex
- components: 共通して使う or 一部しか使わないコンポーネントをファイル分けしています。
  - common: 共通して使うコンポーネント
  - partials: 一部しか使わないコンポーネント

## Deploy

このサイトは次の url にて公開しています。

## 改善点
