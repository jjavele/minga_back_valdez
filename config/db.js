import {connect} from 'mongoose'
connect(process.env.LINK_DB)
    .then(() => console.log('connected to Data Base'))
    .catch(err => console.log(err))