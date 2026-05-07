# TeXnique — プロジェクト概要

## 概要

TeXnique は LaTeX の速打ちを競うブラウザゲームです。制限時間内（Timed Game: 5分）に数式をできるだけ多く LaTeX で入力し、スコアを競います。Zen Mode（無制限時間）も選択可能です。

## ファイル構成

```
TeXnique/
├── public/
│   ├── index.html                    # メインのHTML
│   └── assets/
│       ├── js/
│       │   ├── index.js              # ゲームロジック
│       │   ├── problems.js           # 問題リスト
│       │   ├── normalizations.js     # 入力の正規化ルール
│       │   └── firebase-config.js    # Firebase接続設定
│       ├── lib/
│       │   ├── katex/                # KaTeX（LaTeXレンダリング）
│       │   ├── html2canvas.min.js    # キャンバス比較用
│       │   ├── pixelmatch.js         # ピクセル一致判定
│       │   └── jquery-3.4.1.min.js
│       └── style/style.css
├── firestore.rules                   # Firestore セキュリティルール
├── firestore.indexes.json
└── firebase.json
```

## ゲームの仕組み

- **問題出題**: `problems.js` に定義された問題を上から順番に出題する
- **正解判定**: ユーザー入力をKaTeXでレンダリングし、正解画像とピクセル単位で比較（`pixelmatch`）
- **スコア**: 正解した数式のLaTeXの長さに基づいてポイントを付与（`Math.ceil(latex.length / 10)`）
- **スキップ**: 問題をスキップ可能（ゲーム終了後にスキップした問題の正解を確認できる）

## Firestore 構成

- `leaderboard` コレクション: ゲーム終了後にプレイヤー名とスコアを保存
  - `name` (string, 1〜30文字)
  - `score` (number, 0以上)
  - `timestamp` (serverTimestamp)
- セキュリティルール: `leaderboard` への read/create のみ許可。update/delete は不可。他のコレクションはすべて拒否。

## 主要な定数・変数（index.js）

| 変数 | 説明 |
|------|------|
| `TIMEOUT_SECONDS` | Timed Game の制限時間（秒）。現在は300秒（5分） |
| `TIMEOUT_STRING` | 制限時間の表示文字列 |
| `problems` | `problems.js` で定義された問題の配列 |
| `problemsOrder` | 出題順の配列（現在は problems.js の順序通り） |

## 技術スタック

- **フロントエンド**: 静的HTML + jQuery + Materialize CSS
- **LaTeXレンダリング**: KaTeX
- **バックエンド**: Firebase Hosting + Cloud Firestore
