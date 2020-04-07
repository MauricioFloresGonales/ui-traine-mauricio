import Http from '.';

const API = 'api/employees';

class Employe {
    static fetch(filters) {
        console.log(filters);
        const filterObj = new URLSearchParams(filters).toString();
        return Http.get(`${API}?${filterObj}`);
    }
}

export default Employe;