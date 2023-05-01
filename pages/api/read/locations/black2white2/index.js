import prisma from '/lib/prisma.js';

export default async function handle(req, res) {
    const black2 = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "black2",
                }
            ]
        },
    });


    const white2 = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "white2",
                }
            ]
        },
    });

    

    res.json({ black2, white2 });
}