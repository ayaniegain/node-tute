const { User } = require("../models/user.model");


 const handlegetAllUser=async (req, res) => {
    res.setHeader("x-myData", "Ayan");
  
    let user =await User.find()
  
    console.log(user);
        return res.status(201).json({ status: "success", user });
  
  
  }


  const handleSingleUser=async (req, res) => {
    let id = (req.params.id);
  
    await User.findById(id)
    .then(function (models) {
      res.status(200).send(models)
    })
    .catch(function (err) {
      console.log(err);
    });
  }

  const handleDeleteUser=async (req, res) => {
    let id = (req.params.id);
  
    await User.findByIdAndDelete(id)
    .then(function (models) {
      res.status(200).send(models)
    })
    .catch(function (err) {
      console.log(err);
    }
    )}

    const handleUpdateUser=async (req, res) => {
      const userId = (req.params.id);
      const updatedUser = req.body;
    
     await User.findByIdAndUpdate(userId,updatedUser)
      .then(function (models) {
        res.status(200).send(models)
      })
      .catch(function (err) {
        console.log(err);
      })
    
    }

    const handlecreateUser=async (req, res) => {
      const existingUser = await User.findOne({ email: req.body.email });
      if (existingUser) {
        return res.status(400).json({ message: 'Email already exists' });
      }
      const existingIp = await User.findOne({ ip_address: req.body.ip_address });
      if (existingIp) {
        return res.status(400).json({ message: 'Ip already exists' });
      }

      const { first_name, last_name, email, gender, ip_address } = req.body;
    
      if(!first_name|| !last_name|| !email|| !gender|| !ip_address)return res.send('all field required')
    
      user = new User({
        first_name,
        last_name, 
        email,
        gender,    
        ip_address,
    });
    await user.save();
    
    if(user) return res.status(201).json({ status: "success" });
    
    }


module.exports={handlegetAllUser,handleSingleUser,handleDeleteUser,handleUpdateUser,handlecreateUser}