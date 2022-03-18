const skills = [
    {id: 001, skill: 'HTML', duration: '4 weeks'},
    {id: 002, skill: 'CSS', duration: '4 weeks'},
    {id: 003, skill: 'Javascript', duration: '4 weeks'},
    {id: 004, skill: 'jQuery', duration: '3 weeks'},
    {id: 005, skill: 'Express', duration: '1 week'}
];

const getAll = () => {
    return skills;
};

const getOne = (id) => {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
};

const create = (skill) => {
    skill.id = (skills.length + 1);
    skill.duration = '0 weeks';
    skills.push(skill);
};

const deleteOne = (id) => {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

const update = (id, skill) => {

    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skill.id = parseInt(id);
    skills.splice(idx, 1, skill);
};


module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};