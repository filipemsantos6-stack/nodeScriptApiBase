import express from './src/app.js'
const PORT = 3030

express.listen(PORT, () => {
    console.log(`Porta rodando na porta 127.0.0.1:${PORT}/`)
})
