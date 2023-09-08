function api() {
    const getQuestions = () => {
        return fetch("http://localhost:8000/api/getquestion", { type: "GET"})
        .then((res) => res.json())
    }
    return {
        getQuestions
    }
}

export default api()