export type UserProps = {
    id: String
    email: String
    name: String
    password: String
    createdAt: Date
}

export class User{
    private constructor(readonly props: UserProps) {}

    public static create(name: String, email: String, password: String){
        return new User({
            id: crypto.randomUUID().toString(),
            name,
            email,
            password,
            createdAt: new Date()
        })
    }

    public get id(){
        return this.props.id
    }

    public get name(){
        return this.props.name
    }

    public get email(){
        return this.props.email
    }

    public get password(){
        return this.props.password
    }

    public get createdAt(){
        return this.props.createdAt
    }
}