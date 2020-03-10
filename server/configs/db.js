const mongoose = require('mongoose')

const connectDB = async () => {
  const conn = await mongoose.connect(
    'mongodb+srv://admin:abc123...@cluster-pdbxc.mongodb.net/Database?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    }
  )

  console.log('MongoDB Connected:', conn.connection.host)
}

module.exports = connectDB