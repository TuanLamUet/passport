const router = require('express').Router();
// loccalhost:3300/auth/login
router.get('/login', (req, res) => {
  res.send('login');
});

// loccalhost:3300/auth/logout
router.get('/logout', (req, res) => {
  res.send('Logging out');
});

// loccalhost:3300/auth/google
router.get('/google', (req, res)=> {
  res.send('login with google');
});

module.exports = router;