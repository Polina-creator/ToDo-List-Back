let servers = [
    {id: '1', name: 'AWS', status: 'working'},
    {id: '2', name: 'Goooglic', status: 'working'},
    {id: '3', name: 'Testd', status: 'working'},
    {id: '4', name: 'Fixen', status: 'pending'}
];

export const getAll = (req, res) => {
    res.status(200).json(servers);
}