module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '47807e415fcbfe861e48a1d2983971b6'),
  },
});
