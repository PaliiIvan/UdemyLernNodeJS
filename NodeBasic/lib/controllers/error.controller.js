"use strict";
module.exports = {
    Error404: function (req, res, next) {
        res.status(404).render('404', { pageTitle: 'Page Not Found', path: '/404' });
    }
};
//# sourceMappingURL=error.controller.js.map