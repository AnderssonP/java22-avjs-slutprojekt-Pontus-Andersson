import React, { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function CAccount(){
    const [mail, setmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
  
    const signUp = (e) => {
      e.preventDefault();
      createUserWithEmailAndPassword(auth, mail, password, name, address)
        .then((userCredential) => {
          console.log(userCredential);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    return(
        <div className="my-account-box">
            <form onSubmit={signUp}>
                <input type="text" name="name" placeholder="Namn" value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="email" name="email" placeholder="E-mail" value={mail} onChange={(e) => setmail(e.target.value)}/>
                <input type="password" name="password" placeholder="Lösenord" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input type="text" name="address" placeholder="Adress" value={address} onChange={(e) => setAddress(e.target.value)}/>
                <input type="submit" value="Skapa konto" />
            </form>
        </div>
    );
}

