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

newSkill = (req, res) => {
    res.render('skills/new');
};

create = (req, res) => {
    Skill.create(req.body);
    res.redirect('/skills');
};

deleteSkill = (req, res) => {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
};

edit = (req, res) => {
    res.render('skills/edit', {
        skill: Skill.getOne(req.params.id)
    });
};

update = (req, res) => {
    Skill.update(req.params.id, req.body);
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id)
    });
};

module.exports = {
    index, 
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
};