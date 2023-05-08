export default async function CreateAccount(name, password, mail, address) {
    const url = `https://products-e8e7d-default-rtdb.europe-west1.firebasedatabase.app/Accounts.json`;

    const newAccount ={
        name: name,
        password: password,
        address: address,
        mail: mail
    };

    const options = {
        method: 'POST',
        body: JSON.stringify(newAccount),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    };

    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
}
  
  
  