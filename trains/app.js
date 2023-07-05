const express=require('express');


const app=express();
app.use(express.json);


app.get('/trains',(req,res)=>
{
    res.send('sucessfull');
    const url='http://104.211.219.98/train/trains';
    const tok='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODg1NDUyMTgsImNvbXBhbnlOYW1lIjoiS2FybmFuIGNlbnRlciIsImNsaWVudElEIjoiNDFkNGVhZmItZmQyYi00MmM5LTgxNTgtNjcyMTExMzRkNzQ5Iiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjczNzcyMDE0MTg3In0.LjFQM2qjazzh0fQHGPEu_H6vNVipSNGvkkVwWeTRltA';fetch(url, {
        headers: {

            Authorization: `Bearer ${tok}`,},
      })
    .then(response=>response.json())
    .then(data=>
        {
           res.json(data); 
        })
        .catch(error=>
            {
                console.log(error);
                res.send('error');
            });

});
app.listen(4000,(error)=>
{
    if(error)
    {
        console.log("error in geting port");
    }
    else{
        console.log("successfull");
    }
});


