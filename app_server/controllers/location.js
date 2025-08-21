var homepage = (req,res)=>{
    res.render('index',{title:'Santhosh-23EG107E01'});
};

var location = (req,res)=>{
    res.render('index',{title:'location'});
};

var reviewpage =(req,res)=>{
    res.render('index',{title:'reviewpage'});
};

module.exports={homepage,location,reviewpage};