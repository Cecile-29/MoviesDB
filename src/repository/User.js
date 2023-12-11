// import con from '../../app/database_sql.js';
// module.exports = class UserRepository {

//     async getUserByName(name) {
//         return await con.promise().query('SELECT * FROM `user` WHERE ?', { name }).then((result) => { 
//             return (result[0].length > 0 ? result[0][0] : null);
//         });
//     }

//     async getUserByEmail(email) {
//         return await con.promise().query('SELECT * FROM `user` WHERE ?', { email }).then((result) => { 
//             return (result[0].length > 0 ? result[0][0] : null);
//         });
//     }
    
// };

import con from '../../app/database_sql.js';

export function selectByUsername(username) {    
    return con.promise().query("SELECT * FROM `user` WHERE ?", {username}).then((result) => {
        if(result[0] !== undefined && result[0][0] !== undefined) {
            return result[0][0];
        } else {
            return null;
        }
    });
}