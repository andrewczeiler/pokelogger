import prisma from '/lib/prisma.js';

export default async function handle(req, res) {
    const result = await prisma.pokedex.findMany({
        where: { userId: req.query.userId },
    });

    if(result.length === 0){
        res.json({ result: { dexes: false } })
    }
    else{
        res.json({ result });
    }
}