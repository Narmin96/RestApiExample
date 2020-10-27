
exports.getPosts=(req,res,next)=>{
    
    res.status(200).json({
        posts:[{
            fullname:'Narmin Nasirova',
            department:'Software Development',
            salary:700.00

        }]
        
    })
    
}
exports.createPost=(req,res,next)=>{
    const full_name=req.body.fullname;
    const department=req.body.department;
    const salary=req.body.salary;
    res.status(201).json({
        message:"Post created succesfully!",
        post:{id:new Date().toISOString(),fullname:full_name,department:department,salary:salary}
    
    });
};
