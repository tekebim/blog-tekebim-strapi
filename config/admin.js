module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e24ccebac3f0a9aa4be8116de69e31bb'),
  },
});
