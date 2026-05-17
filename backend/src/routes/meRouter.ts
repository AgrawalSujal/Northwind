import { Router } from "express";
import { getLocalUser } from "../lib/user.js";
import { getAuth } from "@clerk/express";

const router = Router();

router.get('/', async (req, res, next) => {
    try {
        const { userId, isAuthenticated } = getAuth(req);
        if (!isAuthenticated || !userId) {
            res.status(401).json({ error: "Unauthorized" });
            return;
        }

        const user = await getLocalUser(userId);
        if (!user) {
            res.status(404).json({ error: "User not found" });
            return;
        }

        res.json({ user });
    } catch (e) {
        next(e);
    }

})

export const meRouter = router;