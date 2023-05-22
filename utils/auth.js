// the function checks if the user session is active and has the user_id value
// if not present it redirects to /login
const withAuth = (req, res, next) => {
    if(!req.session.user_id) {
        res.redirect('/login');
    } else {
        next();
    }
};
// export the withAuth Function
module.exports = withAuth;