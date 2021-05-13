module.exports = {
    getIndex: (req,res) => {
        res.render('index.ejs')
    },
    getProfile: (req,res) => {
        console.log(req.user)
        res.render('profile.ejs', {user: req.user})
    }
}