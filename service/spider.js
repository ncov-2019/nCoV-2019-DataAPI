const db = require('../database/mysql')
/**
 * 获取数据库中的全部信息
 */
const getAllInfo = () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM cities ORDER BY addtime DESC`, (err, rows) => {
            if (err) {
                reject(err)
            }
            resolve(rows)
        })
    })
}
/**
 * 插入综合信息
 * @param {*} sum 综合信息对象 
 */
const insertSumInfo = (sum) => {
    return new Promise((resolve, reject) => {
        let sql = `INSERT INTO suminfo (confirmedCount,suspectedCount,deadCount,curedCount,addtime) values (${sum.confirmedCount},${sum.suspectedCount},${sum.deadCount},${sum.curedCount},${sum.addtime})`
        db.query(sql, (err, rows) => {
            if (err) {
                reject(err)
            }
            resolve(rows)
        })
    })
}

/**
 * 插入省份的数据
 * @param {*} province 省份对象 
 */
const insertProvinceInfo = (province) => {
    return new Promise((resolve, reject) => {
        let sql = `INSERT INTO provinces (provinceName,provinceShortName,confirmedCount,suspectedCount,deadCount,curedCount,addtime) values ('${province.provinceName}','${province.provinceShortName}',${province.confirmedCount},${province.suspectedCount},${province.deadCount},${province.curedCount},${province.addtime})`
        db.query(sql, (err, rows) => {
            if (err) {
                reject(err)
            }
            resolve(rows)
        })
    })
}

/**
 * 插入城市信息
 * @param {*} city 城市信息对象
 */
const insertCityInfo = (city) => {
    return new Promise((resolve, reject) => {
        let sql = `INSERT INTO cities (provinceName,cityName,confirmedCount,suspectedCount,deadCount,curedCount,addtime) values ('${city.provinceName}','${city.cityName}',${city.confirmedCount},${city.suspectedCount},${city.deadCount},${city.curedCount},${city.addtime})`
        db.query(sql, (err, rows) => {
            if (err) {
                reject(err)
            }
            resolve(rows)
        })
    })
}
/**
 * 更新城市信息
 * @param {*} city 
 */
const updateCityInfo = (city) => {
    return new Promise((resolve, reject) => {
        let sql = `UPDATE ncov_cityinfo SET province= '${city.province}',cityname = '${city.cityName}' ,confirmed = ${city.confirmed},died = ${city.died},cured=${city.cured} WHERE cityname = '${city.cityName}'`
        db.query(sql, (err, rows) => {
            if (err) {
                reject(err)
            }
            console.log(rows);
            resolve(rows)
        })
    })
}
exports.getAllInfo = getAllInfo
exports.insertSumInfo = insertSumInfo
exports.insertProvinceInfo = insertProvinceInfo
exports.insertCityInfo = insertCityInfo
exports.updateCityInfo = updateCityInfo