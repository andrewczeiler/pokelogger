import prisma from '/lib/prisma.js';

export default async function handle(req, res) {
    const brilliantdiamond = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "brilliantdiamond",
                }
            ]
        },
    });


    const shiningpearl = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "shiningpearl",
                }
            ]
        },
    });

    

    res.json({ brilliantdiamond, shiningpearl });
}