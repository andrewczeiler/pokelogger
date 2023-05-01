import prisma from '/lib/prisma.js';

export default async function handle(req, res) {
    const heartgold = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "heartgold",
                }
            ]
        },
    });


    const soulsilver = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "soulsilver",
                }
            ]
        },
    });

    

    res.json({ heartgold, soulsilver });
}