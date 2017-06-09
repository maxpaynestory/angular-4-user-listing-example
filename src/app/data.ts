export class User {

    private _id: string;
    private _name: string;
    private _sender: string;
    private _email: string;
    private _type: string;

    constructor(id: string, name: string, sender: string, email: string, type: string) {
        this._id = id;
        this._name = name;
        this._sender = sender;
        this._email = email;
        this._type = type;
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get sender(): string {
        return this._sender
    }

    get email(): string {
        return this._email;
    }

    get type(): string {
        return this._type;
    }

    toString(): string {
        return this._id + this._name + this._email + this._sender + this._type;
    }
}
