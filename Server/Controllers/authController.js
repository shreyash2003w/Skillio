import Users from '../Models/userModel.js'

export const register = async (req,res,next) =>{
    const {firstName,lastName,email,password} = req.body;

    // Validate Fields
    
    if(!firstName){
        next("First Name is required");
    }
    if(!lastName){
        next("Last name is required");
    }
    if(!email){
        next("Email is required");
    }
    if(!password){
        next("Password is requires");
    }
     
    try {
        // Checkinf if user already exist
        const userExist = await Users.findOne({email});
        
        if(userExist){
            next("Email already Exist");
            return;
        }
          
        // Creating new user
        const user = await Users.create({
            firstName,
            lastName,
            email,
            password
        });

        // User Token
        const token = await user.createJWTToken();

        res.status(201).send({
            success:true,
            message:"Account created successfully",
            user:{
                _id : user._id,
                firstName:user.firstName,
                lastName:user.lastName,
                email:user.email,
                accountType: user.accountType,
            },
            token,
        })

    } catch (error) {
        console.log(error),
        res.status(404).json({message:error.message})
    }
}  



export const signIn = async (req,res,next) =>{
    const {email, password} = req.body;

    try {
        // Validation 
        if(!email || !password){
            next("Please provide user credentials");
            return;
        }

        // Find user by email
        const user = await Users.findOne({email}).select("+password");

        if(!user){
            next("Invalid email or password");
            return;
        }

        // Compare Password

        const isMatch = await user.comparePassword(password);
        if(!isMatch){
            next("Invalid email or password");
            return;
        }

        user.password = undefined;

        const token = await user.createJWTToken();
         
        res.status(201).json({
            success:true,
            message:"Login Successfully",
            user,
            token,
        })

    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message }); 
    }
}