module.exports = {
    getIndex: (req,res) => {
        res.render('main.ejs')
    },
    getProfile: (req,res) => {
        res.render('profile.ejs', {user: req.user})
    }
}