/* GET homepage */
const index = (req, res) => {
  res.render('index', { title: 'WPM LAB INTERNAL 1' });
};

module.exports = {
  index
};