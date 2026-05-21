export default async (req, res, next) => {
    try {
        if (!req.user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (req.user.role !== 'admin') {
            return res
                .status(500)
                .json({ message: `User does not have permissions` });
        }

        next();
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
