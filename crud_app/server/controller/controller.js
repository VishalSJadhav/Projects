var Userdb = require('../model/model');

exports.find = (req, res) =>{
    if(req.query.id){
        const id = req.query.id;
        Userdb.findById(id).then(data=>{
            if(!data){
                return res.status(404).send('The user with the given ID was not found');
            }else{
                res.send(data);
            }}).catch(err=>{
                res.status(500).send(err);
            });
    }else{Userdb.find().then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.send(err);
    });
}
}

exports.create = (req, res) =>{
    if(!req.body){                                                             //validating the request
        return res.status(400).send('Request body is missing');
    }
    const user = new Userdb({                                                  //creating a new user
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })

    user.save(user).then(data=>{
        res.send(data);
    }).catch(err=>{
        res.send(err);
    })
}

exports.update = (req, res) =>{
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, {useFindAndUpdate: false}).then(data=>{
        if(!data){
            return res.status(404).send('The user with the given ID was not found');
        }else{
            res.send(data);
        }
    }).catch(err=>{
        res.send(err);
    })
}

exports.delete = (req, res) =>{
    const id = req.params.id;
    Userdb.findByIdAndDelete(id).then(data=>{
        if(!data){
            return res.status(404).send('The user with the given ID was not found');
        }else{
            res.send('User deleted successfully');
        }
    }).catch(err=>{
        res.send(err);
    });
}