


//- Fonction pour envoyer le header d'autorisation avec le access_token si l'utilisateur est login (recupere dans le local storage)
export function authHeader(){
    const user = JSON.parse(localStorage.getItem('jwt'));
    //console.log("authHeader");
    //console.log(user);
    if(user && user.token)
        return({Authorization: 'Bearer ' + user.token});
    else
        return({});
}