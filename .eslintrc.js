module.exports = {
    extends: [
        'react-app',
    ],
    rules: {
        // 개발 환경에서는 console.log 허용, 프로덕션에서는 에러 처리
        "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
        // 들여쓰기를 스페이스 4칸으로 설정
        indent: ["error", 4],
    },
};
