const express=require("express")
const mongoose=require("mongoose")
const BrandName=require("./model")
const app=express()

app.use(express.json())

mongoose.connect("mongodb+srv://arravolumahesh:arravolumahesh@cluster0.diw6blt.mongodb.net/?retryWrites=true&w=majority",
{useUnifiedTopology:true,
useNewUrlParser:true}).then(
    ()=>console.log("DB Connected")
).catch(err=>console.log(err))

app.post("/addbrands",async(req,res)=>{
    const {brandname}=req.body 
    try{
        const newData=new BrandName({brandname})
        await newData.save();
        return res.json(await BrandName.find())
    }
    catch(err){
        console.log(err.message)
    }
})

app.get("/allbrands",async(req,res)=>{
    try{
        const allData=await BrandName.find()
        return res.json(allData)
    }
    catch(err){
        console.log(err.message)
    }
})

app.get("/allbrands/:id",async(req,res)=>{
    try{
        const Data=await BrandName.findById(req.params.id)
        return res.json(Data)
    }
    catch(err){
        console.log(err.message)
    }
})


app.put("/updatebrands/:id", async (req, res) => {
    const { brandname } = req.body;
    try {
      await BrandName.findByIdAndUpdate(req.params.id, { brandname }, { new: true });
  
      return res.json(await BrandName.find());
    } catch (err) {
      console.log(err.message);
    }
  });


app.delete("/deletebrands/:id",async(req,res)=>{
    try{
        await BrandName.findByIdAndDelete(req.params.id)
        return res.json(await BrandName.find())
    }
    catch(err){
        console.log(err.message)
    }
})

app.listen(4000,()=>console.log("server run on 4000"))