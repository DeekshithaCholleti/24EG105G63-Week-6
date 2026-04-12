import exp from "express";
import {EmpModel} from "../Models/EmpModel.js"
export const empRoute=exp.Router();

//Create emp
empRoute.post("/employees", async (req, res) => {
  const newEmp = req.body;
  const empDoc = new EmpModel(newEmp);
  await empDoc.save();
  res.status(201).json({ message: "Emp created" });
});
//Read all emps
empRoute.get("/employees", async (req, res) => {
  let empList = await EmpModel.find();
  res.status(200).json({ message: "list of emps", payload: empList });
});
//Update emp id
empRoute.put("/employees/:id", async (req, res) => {
  const modifiedEmp = req.body;
  //find and update
  let updatedEmp = await EmpModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: { ...modifiedEmp },
    },
    { returnDocument: "after" },
  );
  if (!updatedEmp) {
    return res.status(404).json({ message: "emp not found" });
  }
  res.status(200).json({ message: "employee updated", payload: updatedEmp });
});

/* Delete emp by id
empRoute.delete("/employees/:id", async (req, res) => {
  let deletedEmp = await EmpModel.findByIdAndDelete(req.params.id);
  if (!deletedEmp) {
    return res.status(404).json({ message: "emp not found" });
  }
  res.status(200).json({ message: "employee deleted", payload: deletedEmp });
}); */
empRoute.delete("/employees/:email", async(req, res) => {
    const email=req.params.email
    const result=await EmpModel.findOneAndDelete({email:email})
    if(result===null){
        res.status(404).json({message:"user not found"});
    }
    return res.status(200).json({message:"user succesfully deleted"});
})
