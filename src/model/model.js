import mongoose from "mongoose";
const mongooseColl = ()=> {
    var schema = mongoose.Schema(
      {
        short: String,
        long: String
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Data = mongoose.model("data", schema);
    return Data;
  };

export default {mongooseColl}