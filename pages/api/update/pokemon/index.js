import prisma from '/lib/prisma.js';

export default async function handle(req, res) {
    const result = await prisma.pokemon.update({
        where: { id: req.body.id },
        data: { caught: req.body.caught }
    });

    res.json({ result });
}