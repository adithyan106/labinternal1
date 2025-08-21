var homepage = (req,res)=>{
    res.render('index',{title:'WPM INTERNAL -1'});
};

var location = (req,res)=>{
    res.render('index',{title:'location'});
};

var reviewpage =(req,res)=>{
    res.render('index',{title:'reviewpage'});
};

module.exports={homepage,location,reviewpage};