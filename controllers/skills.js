const Skill = require('../models/skill');

index = (req, res) => {
    res.render('skills/index', {
        skills: Skill.getAll()
    });
};

show = (req, res) => {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id)
    });
};

module.exports = {
    index, 
    show
};