import prisma from '/lib/prisma.js';

export default async function handle(req, res) {
    const result = await prisma.user.findUnique({
        where: { email: req?.query.email },
    });

    res.json({ result });
}