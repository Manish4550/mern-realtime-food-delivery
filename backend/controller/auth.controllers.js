import User from "../models/user.model.js";

const signUp = async (req, res) => {
  try {
    const { fullName, email, password, mobile, role } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "User Already Exist." });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "password must be at least 6 characters." });
    }

    if(mobile.length<10){
        return res.status(400).json({message:"Mobile Number must be at least 10 digits."})
    }

    const hashpassword = await bcrypt.hash(password,10)

    user=await User.create({
        fullName,
        email,
        role,
        mobile,
        password:hashpassword,
    })
  } catch (error) {
    console.log("");
    
  }
};
