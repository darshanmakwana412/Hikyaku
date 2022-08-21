const knex = require('knex')
const config = require('../knexfile')

const db = knex(config.development)

const getUkiyos = async (req, res)=> {
    const user_id = req.user._id

    const Ukiyos = await Ukiyo.find({ user_id }).sort({createdAt: -1});

    res.status(200).json(Ukiyos);
}

const createUkiyo = async (req, res)=> {
    const {title, content, author} = req.body;

    let emptyFields = [];

    if(!title) {
        emptyFields.push('title')
    }
    if(!content) {
        emptyFields.push('content')
    }
    if(!author) {
        emptyFields.push('author')
    }
    if( emptyFields.length > 0 ) {
        return(
            res.status(400).json({error: 'Please Fill in All the fields', emptyFields})
        )
    }

    try {
        const user_id = req.user._id
        const Ukiyo = await Ukiyo.create({title, content, author, user_id});
        res.status(200).json(Ukiyo);
    } catch(error) {
        res.status(400).json({error: error.message});
    }
}

const getUkiyo = async (req, res)=> {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such Ukiyo"});
    }

    const Ukiyo = await Ukiyo.findById(id);
    if(!Ukiyo) res.status(404).json({error: "No such Ukiyo"});
    else res.status(200).json(Ukiyo);
}

const deleteUkiyo = async (req, res)=> {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such Ukiyo"});
    }

    const Ukiyo = await Ukiyo.findOneAndDelete({_id: id});

    if(!Ukiyo) res.status(404).json({error: "No such Ukiyo"});
    else res.status(200).json(Ukiyo);
}

const updateUkiyo = async (req, res)=> {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such Ukiyo"});
    }

    const Ukiyo = await Ukiyo.findOneAndUpdate({_id: id}, {
        ...req.body
    });

    if(!Ukiyo) res.status(404).json({error: "No such Ukiyo"});
    else res.status(200).json(Ukiyo);
}

module.exports = {
    getUkiyos,
    createUkiyo,
    getUkiyo,
    deleteUkiyo,
    updateUkiyo
};