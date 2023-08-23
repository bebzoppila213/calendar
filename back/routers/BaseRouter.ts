import { Response, Router, Request } from "express";

export type RouterConfigItem = {
    method: "post" | 'get' | 'delete' | "put"
    handler: (req: Request, res: Response) => void,
    path: string,
    middleware: Array<(req: Request, res: Response) => void>
}

export default abstract class BaseRouter{
    private router: Router

    constructor(){
        this.router = Router();
        this.init();
    }

    private init(){
        const routerConfig = this.getRouterConfig(); 
        for (const rout of routerConfig) {
            this.router[rout.method](rout.path, [...rout.middleware, rout.handler])
        }
    }

    public getRouter(){
        return this.router;
    }

    protected sendFail(res: Response, data?: unknown){
        return res.send({ok: false, messages: "Произошла ошибка", data: data})
    }

    protected sendOk(res: Response, data: unknown){
        return res.send({ok: true, messages: "Всё хоршо", data: data})
    }

    protected abstract getRouterConfig(): RouterConfigItem[]

}