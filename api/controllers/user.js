import { db } from '../db.js';

export const getUsers = (request, response) => {
    const q = 'SELECT * FROM usuarios';

    db.query(q, (err, data) => {
        if (err) return response.json(err);

        return response.status(200).json(data);
    })
}