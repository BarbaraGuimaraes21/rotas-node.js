import Dica from "../models/models.js"

const dicaController = (app) => {
    app.get('/dica',(req,res) => {
        const dica = new Dica (req.body.dica)
        res.json({"Dicas": dica.pegaDica()})
    })

    app.post('/dica',(req,res) => {
        const dica = new Dica(req.body.dica)
        dica.insereDica(dica)
        res.json({"Dicas":dica})
    })
}

export default dicaController