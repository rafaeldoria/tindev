const Dev = require('../models/Dev');

module.exports = {
    async store(req, res) {
        const { user } = req.headers;
        const { devId } = req.params;
        

        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if(!targetDev) {
            return res.status(400).json({erro : 'Dev not exists.'});
        }

        const match = "";
        if(targetDev.likes.includes(loggedDev._id)) {
            console.log('teste');
            //this.match = "Deu match";
        }

        loggedDev.likes.push(targetDev._id);

        await loggedDev.save();

        return res.json({ ok: loggedDev, match: match})
    }
}