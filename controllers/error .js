exports.getError404= (req,res,next)=>{
     res.status(404).render('404',
    {pageTitle: "🙂Can't Found U!🥹 ",path: '/404'});
}