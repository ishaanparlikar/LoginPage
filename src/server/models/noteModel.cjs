const mongoose = require("mongoose")

const notesSchema =  new mongoose.Schema( {
title : {
    type : String,
    require : true
},
id:{
      type : String,
      require : true
}

})
const Note = mongoose.model("notes",notesSchema)
module.exports = Note ;