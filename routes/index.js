
/*
 * GET home page.
 */

exports.index = function(req,res){
  res.render('index', { title: 'Flat UI Ready', muppets: [ 'Kermit', 'Fozzie', 'Gonzo' ] });
};

exports.page = function(req,res){
  res.render('page', { 
  	title: 'Express',
  	body: 'body lo'
  });
};