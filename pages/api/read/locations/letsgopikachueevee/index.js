import prisma from '/lib/prisma.js';

export default async function handle(req, res) {
    const letsgopikachu = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "letsgopikachu",
                }
            ]
        },
    });


    const letsgoeevee = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "letsgoeevee",
                }
            ]
        },
    });

    

    res.json({ letsgopikachu, letsgoeevee });
}