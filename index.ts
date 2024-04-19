import express, { Request, Response } from "express"

const PORT = 8000

const app = express();

const users = [
    { id: 1, name: "budi" },
    { id: 2, name: "siskae" },
    { id: 3, name: "angga" }
]

//Middleware ini digunakan agar bisa menggunakan req body
app.use(express.json())

app.get('/users', (req: Request, res: Response) => {
    console.log(req.query.name);



    res.status(200).send("ini endpoint users dengan method GET")
})

app.get('/users/:id', (req: Request, res: Response) => {

    console.log(req.params.id);

    res.status(200).send("ini endpoint users dengan params")
})


app.post("/users", (req: Request, res: Response) => {

    console.log(req.body);

    res.status(200).send("ini adalah request body")
})

app.patch("/users/:id", (req: Request, res: Response) => {
    console.log(req.params.id);

    res.status(200).send("ini adalah endpoint patch")
})

app.delete("/users/:id", (req: Request, res: Response) => {
    console.log(req.params.id);

    res.status(200).send("ini adalah endpoint patch")
})


app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);

})