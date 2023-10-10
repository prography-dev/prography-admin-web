/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/auth/login', // 추후 middleware로 로그인 여부 확인 후 분기처리
        permanent: true,
      },
      {
        source: '/member',
        destination: `/member/dashboard`,
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
