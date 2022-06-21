function Button({cor, frase, contador, atualiza}){

    return(
        <button style={{backgroundColor: cor}} >
            {frase} {contador} 
        </button>
    );
}

export default Button;