document.getElementById("send").addEventListener("click", sendDataToServer)
export async function sendDataToServer (e) {
    e.preventDefault()

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value

    const data = {
        name, email, message
    }

    console.log(data);
    

    await fetch(`http://localhost:3333/clientes/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }).then((response) => {
        if(!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText}`)
        }
        return response.json()
    }).then((responseData) => {
        console.log('Dados enviados com sucesso! ', responseData);
    }).catch((error) => {
        console.error('Erro ao enviar dados: ', error)
    })

    getTask()
    /* location.reload() */
}