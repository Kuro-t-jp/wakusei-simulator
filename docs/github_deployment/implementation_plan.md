# GitHub Pagesへのデプロイ実装計画

## 背景

作成した「惑星シミュレーター」をGitHub Pagesで公開し、Webブラウザから誰でも閲覧できるようにします。

## 提案される変更

### Vite設定の修正

- `vite.config.ts` に `base` プロパティを追加。
- GitHubの公開パス（`/wakusei-simulator/`）を指定します。

### GitHub Actionsの導入

- `.github/workflows/deploy.yml` を作成。
- mainブランチへのプッシュ時に自動的にビルドとデプロイを行います。

### Gitリポジトリの初期化

- `git init` を実行。
- 全ファイルをコミット。

### GitHubリポジトリの作成とプッシュ

- `gh` CLI または GitHub API で `wakusei-simulator` リポジトリを作成。
- リモートを追加し、プッシュ。

## 検証計画

- デプロイ完了後、GitHub PagesのURL（`https://<username>.github.io/wakusei-simulator/`）にアクセス。
- ブラウザ上で3D空間が表示され、惑星が動いていることを確認。
