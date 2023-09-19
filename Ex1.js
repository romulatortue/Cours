class Personne
{
    constructor(nom,age)
    {
        this.nom=nom;
        this.age=age;
        Personne.compteurPersonne++;
    }

    sePresenter()
    {
        document.write('Bonjour ! Je suis' + this.nom +' j\'ai '+ this.age + ' ans.'+ <br/>);
    }

    afficherNombrePersonnes()
    {
        console.log('Il y a actuellement '+ Personne.compteurPersonne + ' Personnes créée');
    }
}

Personne.compteurPersonne=0;


class Enfant extends Personne
{

    constructor(nom,age)
    {
        super(nom,age)
    }

    sePresenter()
    {
        document.write('Bonjour ! Je suis' + this.nom +' j\'ai '+ this.age + ' ans. Je suis un enfant.'+ <br/>);
    }
}


const personne1= new Personne(Bertrand,56);
const enfant1= new Enfant(Nicolas,14);

personne1.sePresenter();
enfant1.sePresenter();
Personne.afficherNombrePersonnes();