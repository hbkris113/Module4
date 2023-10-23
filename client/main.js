const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const submit = document.getElementById("submit")

const submits = () => {
    axios.get("./client/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
}; submit.addEventListener('click', submits)