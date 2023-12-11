export default class User {

    /**
     * @var Id utilisateur
     */
    id;

    /**
     * @var Password en clair
     */
    password;

    /**
     * @var Nom de l'utilisateur
     */
    lastname;

    /**
     * @var Prénom de l'utilisateur
     */
    firstname;


    getId() {
        return this.id;
    }

    getPassword() {
        return this.password;
    }

    setPassword(password) {
        this.password = password;
        return this;
    }

    getLastname() {
        return this.lastname;
    }

    setLastname(lastname) {
        this.lastname = lastname;
        return this;
    }

    getFirstname() {
        return this.firstname;
    }

    setFirstname(firstname) {
        this.firstname = firstname;
        return this;
    }

};