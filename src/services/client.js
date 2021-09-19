 import axios from "axios";

 const api = axios.create({
     baseURL: 'https://api.github.com/users',
     client_id: "d5e96b38cc63601daf55",
     client_secret: "12220e290222e77b1e994b5a5d8a7c1cbcf52980"
    })

    export default api;