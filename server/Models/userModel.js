const db = require('../config');

async function addUser(username, email, hashPassword, phone_number){
    const query = `insert into users (username, email, password, phone_number) 
                    values ($1, $2, $3, $4)
                    RETURNING *`;
    const values = [username, email, hashPassword, phone_number];
    const addUser = await db.query(query, values);
};



// async function login(email){
//     try{
//         const query = `select * from users where email = $1`;
//         const user = await db.query(query, [email]);
//         if ( user.rows[0] != null){
//             return user.rows[0];
//         } else {
//             return "email is not found";
//         }
//     } catch(error){
//         return error;
//     }
// };


const login= async (email) => {
    const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    return result.rows[0];
  };

async function google(email){
    try{
        const query = `select * from users where email = $1`;
        const user = await db.query(query, [email]);
        if ( user.rows[0] != null){
            return user.rows[0];
        } else {
            return "email is not found";
        }
    } catch(error){
        return error;
    }
};



async function ADlogin(email){
    try{
        const query = `select * from users where email = $1`;
        const user = await db.query(query, [email]);
        if ( user.rows[0] != null){
            return user.rows[0];
        } else {
            return "email is not found";
        }
    } catch(error){
        return error;
    }
};

module.exports = {
    addUser,
    login,
    ADlogin,
    google
};