# kasiwa-nuxt-blog

## 特徴

- nuxt/content モジュールを利用し、記事を markdown で管理できるようにしています。
- Web パフォーマンス(LightHouse により、計測)を意識して、読み込む画像を最適化している。

## Library

- Nuxt.js
- Tailwind CSS

## パフォーマンスを改善するために行ったこと

目的:LightHouse で緑色を目指す。

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

ここでは、画像最適化する意義を書き残したいので、LightHouse の結果を逐一残すことにする。

#### 画像を最適化する前の状態

まず、何もしていない状態で LightHouse を利用して、計測する。

![画像を最適化する前の状態](https://res.cloudinary.com/kasiwa/result_1.png)

#### 1.使っている画像を WebP に変換

LightHouse に、**画像を jpeg,png から WebP に変換すれば、アクセシビリティが向上する**と勧められたので、改善する。

##### WebP に変換するメリット

JPEG、PNG よりも WebP はファイルサイズが 25~35%ぐらい減少するらしい。

しかし、、IE が WebP に対応していないらしい、、、

よって、picture タグを使い、source タグを複数用意し、
ブラウザ自身が読み込み可能なフォーマットを判断して読み込むことで、対処する。

```
// ブラウザごとに表示する画像の形式を変える
<picture>
  <source type="image/webp" srcset="flower.webp">
  <source type="image/jpeg" srcset="flower.jpg">
  <img src="flower.jpg" alt="">
</picture>
```

> 参考 URL: [web.dev の WebP 解説](https://web.dev/serve-images-webp)

##### 結果

JPEG、PNG から WebP に変換することで、アクセシビリティは改善できたが、全体的なパフォーマンスは改善できていない。
![](https://res.cloudinary.com/kasiwa/result_2.png)

#### 2.画像ファイルのサイズを収縮&width,height の設定

LightHouse によると、**画像ファイルのサイズを改善すれば、パフォーマンスが向上する**らしい。

よって、修繕作業を行う。

##### Cloudinary を使う理由

Cloudinary の特徴として、以下のようなものがある。

- JPEG/PNG/WebP に対応可能
- パラメーターを利用すれば、画像の画質、サイズを調整可能

使いたい画像をアップロードさえすれば、URL を発行し、パラメーターで画質、サイズ、形式をコントロールできるので、今回は Cloudinary を利用することにしました。

##### 結果

Cloudinary のパラメーターを利用したおかげで、使っている画像の画質を落とし、パフォーマンスを改善できた。

本来の目的である**LightHouse ので緑を達成することができた。**

![](https://res.cloudinary.com/kasiwa/result_3.png)

## ファイルの説明

- content: ブログに投稿される記事を保存するファイル。全て markdown 形式です。
- lib: nuxt/content モジュールを活用して、markdown ファイルを取得する処理を記述してます。
- store: Vuex
- components: 共通して使う or 一部しか使わないコンポーネントをファイル分けしています。
  - common: 共通して使うコンポーネント
  - partials: 一部しか使わないコンポーネント

## Deploy

このサイトは次の url にて公開しています。
参考 URL: [かしわのブログ](https://heuristic-allen-03da7c.netlify.app/)

## 改善点

- 記事検索機能

## 総評

nuxt/content モジュールを利用して、markdown からデータを読み込んでいる。そのため、 普段、Web サービスを作るときに利用する BaaS(ex. Firebase, AWS)を使っていない。

今回はブログを作ったが、パフォーマンスを意識して、自分で Web サービスを作ってみるのが良さそう。
