const express = require(express);
const router = express.Router;

let users = [];


app.post('/', (req, res) => {
    const content = req.body;

    users.push(content);
    res.json(users);
});

router.put('/:username', (req,res) => {
    const userName = req.params.username;
    const content = req.body;

    if(!users.find((user) => user.username === userName)){
        return res.json("Usuário não encontrado")
    }

    const newUser = users.map((user) => {
        if(user.username === userName) return content;
        return user
    })

    users = newUser

    return res.status(200).json(users)
})

router.patch('/:username', (req,res) =>{
    const userName = req.params.username;
    const password  = req.body.password;

    const user = users.find((user) => user.username == userName)
    
    if(!user) return res.json("User not found")

    newUser = users.map((user) => {
        if(user == user) { 
            user.password = password;
        }
        return user
    })

    users = newUser

    return res.json(users)
})

app.delete('/:username', (req, res) => {
    const userName = req.params.username;
    const user = users.filter(item => item.username != userName);
    return res.json(user);
})



module.exports = router

