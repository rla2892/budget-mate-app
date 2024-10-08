module.exports = {
    extends: [
        `react-app`,
    ],
    rules: {
        'indent': [`error`, 4], // 4 spaces
        'linebreak-style': [`error`, `windows`], // Windows linebreaks
        'quotes': [`error`, `backtick`], // Backticks
        'semi': [`error`, `never`], // No semicol
        'no-var': `error`, // No var
        'prefer-const': `error`, // Prefer const
        // 'spaced-comment': [`error`, `always`], // Always space comments
        'no-undef': `error`, // No undefined
        'eqeqeq': `error`, // Use ===
        'no-console': process.env.NODE_ENV === `production` ? `error` : `warn`, // No console in production
        'no-debugger': process.env.NODE_ENV === `production` ? `error` : `warn`, // No debugger in production
        'no-alert': process.env.NODE_ENV === `production` ? `error` : `warn`, // No alert in production
        'no-unused-vars': process.env.NODE_ENV === `production` ? `error` : `warn`, // No unused vars in production
        'no-constant-condition': process.env.NODE_ENV === `production` ? `error` : `warn`, // No constant conditions in production
        'no-empty': process.env.NODE_ENV === `production` ? `error` : `warn`, // No empty blocks in production
    },
}
