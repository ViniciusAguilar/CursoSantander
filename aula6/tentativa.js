<<<<<<< HEAD
import { get } from "http";

export function getMiddlewareAcronym(description) {
	const acronyms = [
		"APPLICATION MIDDLEWARE",
		"ROUTER MIDDLEWARE",
		"ERROR HANDLING MIDDLEWARE",
		"BUILT-IN MIDDLEWARE",
		"THIRD-PARTY MIDDLEWARE"
	];

	const acronymsSigla = [
		"AM",
		"RM",
		"ERM",
		"BIM",
		"TPM"
	]

    for (let i = 0; i < acronyms.length; i++) {
        if (acronyms[i] === description) {
            const nomeComSigla = acronymsSigla[i];
            console.log(nomeComSigla);
            return nomeComSigla; // Retorna a sigla correspondente
        }
        
    }

    console.log("Description not found");
    return null; // Caso não encontre a descrição
	
}

getMiddlewareAcronym("APPLICATION MIDDLEWARE")
=======
import { get } from "http";

export function getMiddlewareAcronym(description) {
	const acronyms = [
		"APPLICATION MIDDLEWARE",
		"ROUTER MIDDLEWARE",
		"ERROR HANDLING MIDDLEWARE",
		"BUILT-IN MIDDLEWARE",
		"THIRD-PARTY MIDDLEWARE"
	];

	const acronymsSigla = [
		"AM",
		"RM",
		"ERM",
		"BIM",
		"TPM"
	]

    for (let i = 0; i < acronyms.length; i++) {
        if (acronyms[i] === description) {
            const nomeComSigla = acronymsSigla[i];
            console.log(nomeComSigla);
            return nomeComSigla; // Retorna a sigla correspondente
        }
        
    }

    console.log("Description not found");
    return null; // Caso não encontre a descrição
	
}

getMiddlewareAcronym("APPLICATION MIDDLEWARE")
>>>>>>> f43de4f920a76d0c1c7021834e7989383592b387
getMiddlewareAcronym("THIRD-PARTY MIDDLEWARE")