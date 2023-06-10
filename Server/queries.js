const db = require("./db_connection");




 //user// ----------> 

const getUserByToken =  (req , res) => {

    const { user_id } = req.user;
    console.log(user_id);

    db.query(
        "SELECT * FROM users WHERE user_id = $1",
         [user_id],
          (error, results) => {
            if (error) {
                return res.status(400).json(error);
            }
            res.status(200).json(results.rows);
          });
};

const createUser = async (req, res) => {
    const { name , email , password , phone } = req.body;

    let sql = "SELECT * FROM users where email = $1";
    const oldUser = await db.query(sql, [email]);

    if(oldUser.rows.length != 0) {
        res.status(409).send('User Already Exist.');
    } else {
        db.query(
            "INSERT INTO users (username, email,password,phone,is_delete VALUES ($1, $2, $3, $4, $5) RETURNING *)",
            [
                "user",
                name,
                email,
                password,
                phone,
                false,
            ],
            (error, response) => {
                if (error) {
                    return res.status(400).json(error);
            }
            res.status(201).json(results.rows[0])
        }
        );
    }

};

const getUser = (req, res) => {
    db.query(
      "SELECT * FROM users WHERE is_delete = false ORDER BY user_id ASC",
      (error, results) => {
        if (error) {
          return res.status(400).json(error);
        }
        res.status(200).json(results.rows);
      }
    );
  };
  
  const getUserscount = (req, res) => {
    db.query(
      "SELECT * FROM users WHERE is_delete = false",
      (error, results) => {
        if (error) {
          return res.status(400).json(error);
        }
        res.status(200).json(results.rows.length);
      }
    );
  };
  
  const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
  
    db.query(
      "SELECT * FROM users WHERE user_id = $1",
      [id],
      (error, results) => {
        if (error) {
          return res.status(400).json(error);
        }
        res.status(200).json(results.rows);
      }
    );
  };

  const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
  
    db.query(
      "UPDATE users SET is_delete = $1 WHERE user_id = $2",
      [true, id],
      (error, results) => {
        if (error) {
          return res.status(400).json(error);
        }
        res.status(200).send(`User deleted with ID: ${id}`);
      }
    );
  };

  const updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email, password, phone } = req.body;
    console.log(req.body);
  
    db.query(
      "UPDATE users SET username = $1, email = $2, password = $3, phone=$4 WHERE user_id = $5",
      [name, email, password, phone, id],
      (error, results) => {
        if (error) {
          return res.status(400).json(error);
        }
        res.status(200).send(`User info  with ID: ${id} updated`);
      }
    );
  };

  const checkUser = (req, res, next) => {
    const { email, password } = req.body;
  
    db.query(
      "SELECT * FROM users WHERE is_delete = false ORDER BY user_id ASC",
      (error, results) => {
        if (error) {
          return res.status(400).json(error);
        }
  
        const result = results.rows.find((user) => {
          return user.email === email && user.password === password;
        });
  
        if (result) {
          req.body = result;
          next();
        } else {
          res.status(404).send("user not exist");
        }
      }
    );
  };
  




// Admin --------->

  
  const getAdminByToken = (req, res) => {
    const { admin_id } = req.user;
  
    console.log(req.body);
    db.query(
      "SELECT * FROM public.admin WHERE admin_id = $1",
      [admin_id],
      (error, results) => {
        if (error) {
          return res.status(400).json(error);
        }
        res.status(200).json(results.rows);
      } 

    
    );
  };
 
  const checkAdmin = (req, res, next) => {
    const { email, password } = req.body;
    db.query(
      "SELECT * FROM admin WHERE is_delete = false ORDER BY admin_id ASC",
      (error, results) => {
        console.log(results);
        if (error) {
          return res.status(400).json(error);
        }
  
        const result = results.rows.find((user) => {
          return user.email === email && user.password === password;
        });
  
        if (result) {
          req.body = result;
          next();
        } else {
          res.status(404).send("admin not exist");
        }
      }
    );
  };

module.exports = {
    getUserByToken,
    createUser,
    getUser,
    getUserscount,
    getUserById,
    deleteUser,
    updateUser,
    getAdminByToken,
    checkUser,
    checkAdmin,
}
