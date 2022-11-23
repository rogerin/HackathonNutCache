let axios = require('axios')

async function test (){

    let res = await axios.get('http://localhost:3000/users', 
    );
    let data = res.data;

    console.log(data  )
}

test()
