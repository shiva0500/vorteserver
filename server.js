const express = require('express')
const app = express()
const port = 3000
const axios = require('axios')
const cors = require('cors')
app.use(cors())
app.use(express.json())

app.get('/:prompt', async (req, res) => {
    const prompt = req.params.prompt
    const image = await getImage(prompt)
    res.send(image)
})

const getImage = async (prompt) => {
    const axios = require('axios');

    const options = {
      method: 'POST',
      url: 'https://ai-image-generator3.p.rapidapi.com/generate',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '9d0ae3605emshc4cac6c9415fd8dp103edbjsn2564857574da',
        'X-RapidAPI-Host': 'ai-image-generator3.p.rapidapi.com'
      },
      data: {
        prompt: prompt,
        page: 1
      }
    };
    
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
