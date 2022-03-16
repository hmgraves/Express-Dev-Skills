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

module.exports = {
    getAll,
    getOne
};