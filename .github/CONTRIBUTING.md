以下の手順に従ってプロジェクトに貢献してください。

## ステップ1: Issueの作成

- 問題を発見した場合や、新しい機能の提案がある場合は、まず[Issueを作成](https://github.com/ucan-lab/sample-repository/issues/new)してください。
- [Issueのテンプレート](https://github.com/ucan-lab/sample-repository/tree/develop/.github/ISSUE_TEMPLATE)に従って、問題や提案の詳細を記述してください。
- 作成したIssueへ適切なラベルを設定してください。
  - `bug`, `feature`, `document`, `chore`, `refactor` の中から1つ選択してください。
  - 重複したIssueは `duplicate` を付けてクローズしてください。
  - 対応しないIssueは `wontfix` を付けてクローズしてください。
  - 優先度が低いIssueは `icebox` を付けてください。

## ステップ2: ブランチの作成

- Issueに対応するためのブランチを作成します。ブランチ名は、Issue番号と関連するキーワードを含めるとわかりやすくなります。
- 新しいブランチは最新の `develop` から切り出してください。

```
$ git fetch
$ git switch -c feature-123-description origin/develop
```

## ステップ3: 変更の実装

- ローカルブランチで変更を加え、プロジェクトに貢献します。
- コードの変更が完了したら、コミットしてください。コミットメッセージには、変更内容とIssue番号を含めると良いでしょう。
- プルリクエストを作成する前に、ユニットテストやフォーマッタの適用してください。
- wip などの作業コミットはプルリクエスト作成前にrebaseして整理してください。

```
$ git add .
$ git commit

# 必要に応じて最新のdevelopを取り込んだり、作業コミットを整理する
$ git fetch
$ git rebase origin/develop
$ git rebase origin/develop -i

# 完成したらpushする
$ git push -u origin HEAD
```

## ステップ4: プルリクエストの作成

- [Pull Requestのテンプレート](https://github.com/ucan-lab/sample-repository/tree/develop/.github/PULL_REQUEST_TEMPLATE)に従って、詳細を記述してください。
- PRの作成時には、
  - `develop` ブランチに向けてPRを作成してください。
  - `Reviewers` にレビュー依頼する人を必ず指定してください。
  - `bug`, `feature`, `document`, `chore`, `refactor` の中からラベルを1つ選択してください。
  - もしリファクタリングが必要になる場合はPRを分割することを検討してください。
- PRが未完成の場合
  - `Draft Pull Request` での作成を検討してください。
  - 作業途中を意味するように `Assigness` にレビュイー自身をアサインしてください。
- PRが完成の場合
  - `Assigness` からアサイン設定を `空` にして手が離れたことを明示します。
  - `not-reviewed` ラベルを付けて `未レビュー` 状態と分かるようにします。
  - レビューの依頼時は `Reviewers` に指定した人全員にメンションを付けてPRにコメントして連絡してください。
- 特に見てもらいたい点やディスカッションしたい場合はセルフレビューしてコメントすることを検討してください。
- 動作確認についてはPR作成者自身が責任を持ちます。

## ステップ5: コードレビュー(レビュワーへ)

- レビュワーはコードレビューの基準と観点に沿ってレビューしてください。

### コードレビューの基準(レビュワーへ)

https://fujiharuka.github.io/google-eng-practices-ja/ja/review/reviewer/standard.html

- コードレビューの目的は、コードベースで全体的な品質を徐々に向上させることです。
- 開発者は自分のタスクを進めることができなければならず、レビュアーはPRの品質を確認する義務がある。
- PRが完璧でなくても、システムのコードの全体的な健康状態を改善すると確実にわかれば、レビュアーはPRを積極的に承認すべき。
- レビュアーは完璧さではなく継続的な改善を追求すべきで、重要でない指摘には「Nit:」というプレフィックスを付けることが推奨される。
- コードレビューは開発者に新しいことを教える重要な機会であり、知識の共有はシステムのコードの健康状態を改善する試みの一部。
- 技術的な事実とデータが個人的な意見と好みをくつがえし、スタイルガイドがスタイルに関しての絶対的な権威である。
- ソフトウェア設計に関する論点は基本的な原則に基づいており、有効な選択肢がいくつかある場合、作成者の選好を受け入れるべき。
- 他のルールが適用されない場合、レビュアーはCL作成者に現在のコードベースとの一貫性を維持するよう求めることができる。
- コードレビューで意見の対立があれば、開発者とレビュアーの間でコンセンサスを得るように調整し、必要に応じてより広範にチーム内で議論することが推奨される。

### コードレビューの観点(レビュワーへ)

https://fujiharuka.github.io/google-eng-practices-ja/ja/review/reviewer/looking-for.html

- コードがうまく設計されている
- 機能性がコードのユーザーにとって適切である
- UI の変更がある場合、よく考えられていて見た目も適切である
- 並行処理がある場合、安全に行われている
- コードが必要以上に複雑でない
- 開発者は将来必要になるかもしれないものではなく、現在必要だとわかっているものを実装している
- コードには適切なユニットテストがある
- テストがうまく設計されている
- 開発者はあらゆるものに明確な名前を使った
- コメントは明確で有意義なもので、「何」ではなく「なぜ」を説明している
- コードは適切にドキュメント化されている（一般的には g3doc で）
- コードはスタイルガイドに準拠している

### レビューコメントの書き方(レビュワーへ)

https://fujiharuka.github.io/google-eng-practices-ja/ja/review/reviewer/comments.html

- コメントは丁重に
- 理由を説明してください
- 問題の指摘に加えて明確な方向性を示すことと、開発者本人に決定を委ねることをバランス良く行ってください
- 複雑なコードを見つけたらそれを説明してもらうだけで終わらせず、コードをシンプルにしてもらうとかコードにコメントを追加するよう開発者に勧めてください

### 返信テンプレート(レビュワーへ)

レビュー時の返信にラベルテンプレートを設定しておくと便利です。

- https://github.com/settings/replies
- https://docs.github.com/ja/get-started/writing-on-github/working-with-saved-replies/creating-a-saved-reply

```
![must](https://img.shields.io/badge/review-must-critical.svg)
![suggest](https://img.shields.io/badge/review-suggest-success.svg)
![imo](https://img.shields.io/badge/review-imo-yellow.svg)
![nits](https://img.shields.io/badge/review-nits-inactive.svg)
![ask](https://img.shields.io/badge/review-ask-informational.svg)
![tweet](https://img.shields.io/badge/review-tweet-9cf.svg)
```

### ラベルの意味

- must: 必須。明らかに仕様を満たしていない。セキュリティ的にまずい場合等。
  - このラベルを付ける場合は `Change Request` で返信してください。
- ask: レビュイーへの質問。
- imo: in my opinionの略。
  - こういう風に書いた方が良いと思うという意見。
  - 取り入れるかどうかはレビュイーに任せる。
- nits: nitpickの略。些細な指摘（typoなど）。Approveしても良い。
- suggest: 提案。「こう書いた方がいいよ」とよりよい書き方がある場合に提案する。
  - [Suggested change](https://docs.github.com/ja/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request) 機能も検討してください。
- tweet: つぶやき。ぼやき。お気持ち

## ステップ6: コードレビューのフィードバック対応

- レビュワーはレビューコメントをしたら `Assigness` をレビュイーに返します。
  - レビュイーはフィードバック対応を行ったら `Assigness` をレビュワーに設定します。
  - ボールを持ってる人にアサインを設定してください。
- フィードバックのやり取りが行われている間は `rebase` しないでください。
- 1フィードバックに対して1コミットで対応していくとレビューが効率的です。

## ステップ7: コードレビュー完了

- レビュワーがApproveしたらコードレビュー完了です。
- フィードバック対応中に `develop` と差分が出た場合は最新を取り込んでください
- 必要に応じてコミットを整理してください。
  - 作業コミットやデバッグコードが入らないように注意してください。
- `Create a merge commit` ボタンを押してPR作成者の責任でマージします。

```
$ git fetch
$ git rebase origin/develop
$ git rebase origin/develop -i
$ git push --force-with-lease
```

## ステップ8: ステージングデプロイ(自動)

- `develop` にPRがマージされると自動でステージングデプロイが行われます。

## ステップ9: リリースプルリクエストの作成(自動)

- `develop` にPRがマージされると自動で `main` 向けにリリースプルリクエストの作成されます。
  - メンションがついたチェックリストにチェックしてください。
  - マージNGな変更が入らないようにチェックすることが目的です。
- リリースプルリクエストには `release` ラベルを必ず付けます。
- バージョニング
  - メジャーバージョンアップ(1.0.0 -> 2.0.0)
    - 破壊的な変更がある場合に行います。
    - リリースプルリクエストに `major` ラベルを付けます。
  - マイナーバージョンアップ(1.0.0 -> 1.1.0)
    - `feature` ラベルが付与されているプルリクエストを含む場合に行います。
    - リリースプルリクエストに `minor` ラベルを付けます。
  - パッチバージョンアップ(1.0.0 -> 1.0.1)
    - 不具合修正、軽微な変更の場合に行います。
    - ラベルを付けない場合はパッチバージョンアップになります。
- `Create a merge commit` ボタンを押してマージします。
- 補足:
  - 新たにPRが `develop` にマージされるとリリースプルリクエストのチェックリストに追記されます。
  - リリースプルリクエストがマージされた後に、新たにPRが `develop` にマージされると新しくリリースプルリクエストが作成されます。

## ステップ10: リリースドラフトの作成(自動)

- `main` にPRがマージされると[リリース](https://github.com/ucan-lab/sample-repository/releases)のドラフトを自動で作成します。
- 補足:
  - 新たにリリースPRが `main` にマージされるとリリースドラフトが追記されます。
  - リリースドラフトが `Publish release` されると新しくリリースドラフトが作成されます。

## ステップ11: プロダクションデプロイの作成(自動)

- [リリース](https://github.com/ucan-lab/sample-repository/releases) のドラフトが `Publish release` されるとプロダクションデプロイが自動で行われます。
