import db from '../database/db.js'
class Dica {
    constructor(dica){
        this.dica = dica
    }

    insereDica = (dica) => {
        console.log(db.dica);
        db.dica.push(dica);
        console.log(db.dica);
    }

    pegaDica = () => {
        return db.dica
    }
}

export default Dica