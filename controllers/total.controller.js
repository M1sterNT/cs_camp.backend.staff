import validator from 'validator';
import firebase from '../config/firebase';
const Total = async (req, res, next) => {
    let CheckInt = ['01', '02', '03', '04', '05', '06', '07', '08', '09']
    if (validator.isInt(req.params.id) && req.params.id <= 15) {
        if (CheckInt.indexOf(req.params.id) == -1 &&  req.params.id < 10) {
            req.params.id = "0" + req.params.id
        }
        const snapshot = await firebase.database().ref('/' + req.params.id).once('value');
        const response = Object.assign(snapshot.val());
        res.status(200).json({ success: true, id: req.params.id, value: response })
    } else {
        res.status(401).json({ success: false, message: 'Bad_Request' })
    }


};

export default Total

