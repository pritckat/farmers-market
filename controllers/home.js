module.exports = {
    getIndex: (req,res) => {
        if (req.user) {
            res.render('main.ejs')
        } else {
            res.render('index.ejs')
        }
    },
    getProfile: (req,res) => {
        res.render('profile.ejs', {user: req.user})
    }
}