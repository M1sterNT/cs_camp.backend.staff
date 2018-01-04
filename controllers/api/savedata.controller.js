import validator from 'validator';
import firebase from '../../config/firebase';
const SaveData = async (req, res, next) => {
    let CheckInt = ['01', '02', '03', '04', '05', '06', '07', '08', '09']
    if (validator.isInt(req.body.div_id) && req.body.div_id <= 15) {
        if (CheckInt.indexOf(req.body.div_id) == -1 &&  req.body.div_id < 10) {
            req.body.div_id = "0" + req.body.div_id
        }
        const snapshot = await firebase.database().ref('/' + req.body.div_id).once('value');
        const response = Object.assign(snapshot.val());
        firebase.database().ref('/' + req.body.div_id).update(response + 1);
        res.status(200).json({ success: true, id: req.body.div_id, value: response })
    } else {
        res.status(401).json({ success: false, message: 'Bad_Request' })
    }
}

export default SaveData