module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0878d529d3169bec64c721197818ca0e'),
  },
});
