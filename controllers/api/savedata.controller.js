import validator from 'validator';
import firebase from '../../config/firebase';
import db from './../../models/index'
//import  MemDiv from './../../models/memdiv'
var max = [-1, 6, 7, 8, 9,3,4,8,6,7,8,9]

const MemDivs = db.sequelize.define('member_divisions', {
    stu_id: {
        type: db.Sequelize.INTEGER
    },
    div_id: {
        type: db.Sequelize.INTEGER
    },
}, {

    });
    
const SaveData = async (req, res, next) => {

    let CheckInt = ['01', '02', '03', '04', '05', '06', '07', '08', '09']
    if (validator.isInt(req.body.div_id) && req.body.div_id <= 15) {
        if (req.body.stu_id != '' && req.body.div_id != '' && parseInt(req.body.stu_id / 1000) == 59050 || parseInt(req.body.stu_id / 1000) == 60050) {

            MemDivs.findAndCountAll({where: {stu_id: req.body.stu_id}}).then(async (result) => {
            if (result.count === 0) {
           
            if (CheckInt.indexOf(req.body.div_id) == -1 && req.body.div_id < 10) {
                req.body.div_id = "0" + req.body.div_id
            }
            const snapshot = await firebase.database().ref('/div/' + req.body.div_id).once('value');
            const response = Object.assign(snapshot.val());
        
            if (response < max[parseInt(req.body.div_id)]) {
                let updates = {};
                updates['/div/' + req.body.div_id] = response + 1;
                firebase.database().ref().update(updates);
                MemDivs.create({ stu_id: req.body.stu_id, div_id: req.body.div_id })
                res.status(200).json({ success: true, message: "ลงทะเบียนฝ่ายสำเร็จ" })
            } else {
                res.status(401).json({ success: true, message: "ฝ่ายนี้ได้เต็มไปแล้วกรุณาลองใหม่อีกครั้ง" })
            }
        }else{
            res.status(401).json({ success: false, message: 'คุณไม่มีสิทธิ์ในการลงฝ่ายซ้ำ' })
        }})
        } else {
            res.status(401).json({ success: false, message: 'คุณไม่มีสิทธิ์ในการลงฝ่าย' })
        }
    } else {
        res.status(401).json({ success: false, message: 'Bad_Request' })
    }
}

export default SaveData 