import prisma from '/lib/prisma.js';

export default async function handle(req, res) {
    const sworddlc = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "sworddlc",
                }
            ]
        },
    });


    const shielddlc = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "shielddlc",
                }
            ]
        },
    });

    

    res.json({ sworddlc, shielddlc });
}