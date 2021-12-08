type API = {
    type?: "Bearer" | string,
    accessToken: string
}

type Password = {
    username: string,
    password: string
}

export type { API, Password };