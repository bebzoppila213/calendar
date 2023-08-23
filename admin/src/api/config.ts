export const BASE_URL = "http://localhost:8082"

export interface IResponse<T> {
    ok: boolean,
    messages: string,
    data: T
}