const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('database.db')

db.serialize(() => {
    db.get("SELECT name FROM sqlite_master WHERE type='table' AND name='itens'", (err, row) => {
        if (err) {
            console.error("Erro ao verificar a existência da tabela:", err)
            return
        }
        if (row) {
            console.log("A tabela ITENS já existe no banco de dados.")
        } else {
            db.run("CREATE TABLE itens (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, tenant_id INTEGER)", (err) => {
                if (err) {
                    console.error("Erro ao criar a tabela ITENS:", err)
                } else {
                    console.log("Tabela ITENS criada com sucesso.")
                }
            })
        }
    })
})

module.exports = db
