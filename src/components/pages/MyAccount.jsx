import AuthDetails from "../../authDetails"
import React from "react"
export default function MyAccount(){

    return(
        <div>
            <h1>mitt konto</h1>
            <h2>Välkommen <AuthDetails/></h2>
            <div>
                <h1>Mina köp:</h1>
            </div>
        </div>
    )
}