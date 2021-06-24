module.exports = {
    getIndex: (req, res)=>{
        if (req.user) {
            res.render('main.ejs')
        } else {
            res.render('index.ejs')
        }
    },

    getMain: (req,res) => {
        res.render('main.ejs')
    },
    getProfile: (req,res) => {
        console.log(req.session)
        // console.log('user:', req.user)
        try {
            res.render('profile.ejs', {user: req.user})
        } catch(error) {
            console.log(error)
        }
    },
}