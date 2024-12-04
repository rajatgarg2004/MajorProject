const Department = require('../models/departmentSchema');

const addDepartment = async (req, res) => {
    const user = req.user;
    if (user.role == 'head') {
        const department = new Department(req.body);
        try {
            
            await department.save();
            res.status(201).json({ message: 'Department added successfully' });
        } catch (err) {
            res.status(500).json({ message: 'Error adding department', error: err.message });
        }
    } else {
        return res.status(401).json({ message: 'You are not authorized to add a course' });
    }
}
const getDepartment = async (req, res) => {
    const deptName = req.body.departmentName;
    if(!deptName){
        return res.status(400).json({ message: 'Please provide department name' });
    }
    try {
        const department = await Department.findOne({name : deptName});
        if (!department) {
            return res.status(404).json({ message: 'Department not found' })
        }
        res.status(200).json(department);

    } catch (err) {
        res.status(500).json({ message: 'Error fetching department', error: err.message });
    }
}
const updateDepartment = async (req,res)=>{
    const deptId = req.body.department;
    if(!deptId){
        return res.status(400).json({ message: 'Please provide department id' });
    }
    try {
        const department = await Department.findById(deptId);
        if (!department) {
            return res.status(404).json({ message: 'Department not found' })
        }
        const updatedDepartment = await Department.findByIdAndUpdate(deptId,req.body,{new:true});
        res.status(200).json({"The updated department is" : updatedDepartment});

    } catch (err) {
        res.status(500).json({ message: 'Error fetching department', error: err.message });
    }
}
module.exports = {
    addDepartment,
    getDepartment
}