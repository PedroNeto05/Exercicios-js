export function middlewareGlobal(req,res,next){
  const errorsMsgs = req.flash('errors')
  const successMsgs = req.flash('success')
  res.locals.errors =  errorsMsgs
  res.locals.success =  successMsgs
  next()
}

export function checkCsrfError(err, req, res, next) {
  if(err && 'EBADCSRFTOKEN' === err.code) {
    return res.render('404');
  }
}


export function csrfMiddleware (req, res, next) {
  const token = req.csrfToken();
  res.cookie('XSRF-TOKEN', token);
  res.locals.csrfToken = token;
  next();
}
