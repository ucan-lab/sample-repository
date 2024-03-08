module.exports = {
  disableEmoji: true,
  format: '{type}{scope}: {emoji}{subject}',
  list: ['test', 'feat', 'fix', 'chore', 'docs', 'refactor', 'style', 'ci', 'perf'],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: ['type', 'scope', 'subject', 'body', 'breaking', 'issues', 'lerna'],
  scopes: [],
  types: {
    chore: {
      description: 'ビルド関係や便利ツールに関すること',
      emoji: '🤖',
      value: 'chore'
    },
    ci: {
      description: 'CIに関すること',
      emoji: '🎡',
      value: 'ci'
    },
    docs: {
      description: 'コード以外のドキュメントに関すること',
      emoji: '📚',
      value: 'docs'
    },
    feat: {
      description: '新機能開発に関すること',
      emoji: '🎸',
      value: 'feat'
    },
    fix: {
      description: 'バグ修正に関すること',
      emoji: '🐛',
      value: 'fix'
    },
    perf: {
      description: 'パフォーマンス改善に関すること',
      emoji: '⚡️',
      value: 'perf'
    },
    refactor: {
      description: 'リファクタリングに関すること',
      emoji: '💡',
      value: 'refactor'
    },
    style: {
      description: '見た目のデザイン修正や軽微なCSSの修正に関すること',
      emoji: '💄',
      value: 'style'
    },
    test: {
      description: 'テストコードに関すること',
      emoji: '💍',
      value: 'test'
    },
  },
  messages: {
    type: 'コミットする変更の種類を選択してください(必須):',
    customScope: 'このコミットが影響するスコープを選択してください(任意):',
    subject: 'コミットのタイトル(必須):\n',
    body: 'コミットの本文を入力してください(任意):\n ',
    breaking: '破壊的な変更があれば記載してください(任意):\n',
    issues: 'このコミットで完了するIssueがあれば番号を入力してください(任意):, 例 #123:',
  }
};
