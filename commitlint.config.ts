import type { UserConfig } from '@commitlint/types'

// Prefixes are used to identify the type of commit:

// - feat: a new feature.
// - fix: a bug fix.
// - docs: documentation only changes.
// - style: changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
// - refactor: A code change that neither fixes a bug nor adds a feature.
// - perf: changes that affect performance and/or memory usage.
// - test: adding missing tests or correcting existing tests.
// - build: changes that affect the build system or dependencies (example scripts, dependency versioning).
// - ci: changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs).
// - chore: other changes that don't modify src or test files.
// - revert: reverts a previous commit.

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100],
    'header-max-length': [2, 'always', 100],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case']
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test'
      ]
    ]
  }
} as UserConfig
