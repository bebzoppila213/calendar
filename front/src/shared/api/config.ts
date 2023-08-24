export const BASE_URL = "http://a0849334.xsph.ru"

export interface IResponse<T> {
    ok: boolean,
    messages: string,
    data: T
}