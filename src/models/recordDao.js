const { dataSource } = require('./dataSource');
// const { throwError } = require('../utils');

//workout_records
//user_id
//water_content
//workout_time
//current_weight
//muscle_mass
//body_fat
//max_heartrate
//created_at

//users
//height










const recordCreator = async (requestCreateRecord) => {
    try {
      const creator = `
        INSERT INTO workout_records 
        (
            user_id, 
            water_content, 
            workout_time, 
            current_weight, 
            muscle_mass, 
            body_fat, 
            max_heartrate, 
            created_date
        ) 
        VALUES 
        (?, ?, ?, ?, ?, ?, ?, ?);
      `;
  
      const values = [
        requestCreateRecord.user_id,
        requestCreateRecord.water_content,
        requestCreateRecord.workout_time,
        requestCreateRecord.current_weight,
        requestCreateRecord.muscle_mass,
        requestCreateRecord.body_fat,
        requestCreateRecord.max_heartrate,
        requestCreateRecord.created_date
      ];
  
      const recordCreator = await dataSource.query(creator, values);
      return recordCreator;
  
    } catch (error) {
      console.error("Error creating record:", error);
      throw error;
    }
  }

const bmiRecordReader = async(requestReadRecord) => {
    const weightdReader = await dataSource.query(`SELECT weight, created_at FROM workout_records WHERE user_id = ${id}`);
    const heightReader = await dataSource.query(`SELECT height FROM users WHERE user_id = ${id}`);
    const rawDataBMI = {
        weightReader,
        heightReader
    }
    return rawDataBMI;
} //서비스 로직에서 처리해야함

const maxHeartbeatReader = async(requestReadRecord) => {
    const heartbeatReader = await dataSource.query(`SELECT max_heartrate, created_at FROM workout_records WHERE user_id = ${id}}`)
    
}

const musclemassReader = async(requestReadRecord) => {
    
}

const bodyfatReader = async(requestReadRecord) => {
    
}


module.exports = {
    recordCreator,
    bmiRecordReader,
    maxHeartbeatReader,
    musclemassReader,
    bodyfatReader,
}

// 운동 데이터 차트/BMI/심박수/체지방/골격근