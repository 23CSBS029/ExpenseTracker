const req = require('express/lib/request.js');
const expenseModel = require('../Model/expenseModel.js')

const deleteExpense = async (req, res) => {
    try {
        
        const { uuid } = req.params
        const del = await expenseModel.findOneAndDelete ({uuid : uuid})
        console.log(uuid);
        
        if ( !del )
            return res.json({message:"Not deleted"})
        return res.json({message:"Deleted sucessfully!.."})

    } catch (error) {
        throw error
    }
}

const updateExpense = async (req, res) => {

    try {
        
        const { uuid } = req.params;
        const { title, amount, description } = req.body;
        console.log(uuid);
        
        if ( !uuid )
            return res.json ( { message : "uuid is required to update!.." } )

        if ( !title || !amount || !description )
            return res.json ( { message : "fill every columns!.." } )

        const updatedQuery = await expenseModel.findOneAndUpdate(
            {uuid : uuid},
            {title, amount, description},
            {new : true},
        )

        if ( !updatedQuery )
            return res.json({message:"Cannot find expense with given id!..."})

        return res.json({message:"Updated sucessfully!.."})

    } catch (error) {
        throw error
    }

}

const createExpense = async (req, res) => {

    try {
        
        const { title, amount, description } = req.body;
        if ( !title || !amount || !description )
            return res.json({message : "Fill all data..."})

        let data = new expenseModel( {
            title, 
            amount,
            description
        })

        const savedData = await data.save();
        return res.json({message:"Added sucessfully!.."})

    } catch (error) {
        throw error
    }

}

const getAllExpense = async (req, res) => {
    try {
        
        const data = await expenseModel.find();
        if ( !data || data.length === 0 )
            return res.status(401).json({message : 'Empty expenses...'})
        return res.json(data);

    } catch (error) {
        console.log(error);
    }
}

module.exports = { getAllExpense, createExpense, updateExpense, deleteExpense }