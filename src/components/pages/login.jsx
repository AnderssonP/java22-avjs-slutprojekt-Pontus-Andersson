import React, { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login(){
    const [mail, setmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, mail, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

    return(
        <div className="my-account-box">
            <form onSubmit={signIn}>
                <input type="text" name="email" placeholder="E-mail" value={mail} onChange={(e) => setmail(e.target.value)}/>
                <input type="password" name="password" placeholder="Lösenord" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input type="submit" value="Logga in" />
            </form>
        </div>
    );
}