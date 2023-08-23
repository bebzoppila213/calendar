import { Response, Request } from "express";
import CalendarService from "../services/CalendarService";
import BaseRouter, { RouterConfigItem } from "./BaseRouter";
import { getFirstLastDayInMonth } from "../utils/date";

export default class CalendarRouter extends BaseRouter {
  private calendarService: CalendarService;

  constructor() {
    super();
    this.calendarService = new CalendarService();
  }

  private async addRecord(req: Request, res: Response) {
    try {

      const serviceItem = await this.calendarService.create(
        req.body.name,
        req.body.phone,
        req.body.date
      );

      this.sendOk(res, serviceItem);
    } catch {
      this.sendFail(res);
    }
  }

  private async getRecords(req: Request, res: Response) {
    try {
      const dates = getFirstLastDayInMonth(new Date(req.query.date as string));

      const records = await this.calendarService.get(
        dates.firstDay,
        dates.lastDay
      );

      this.sendOk(res, records);
    } catch(e) {      
      this.sendFail(res);
    }
  }

  private async getAllRecords(req: Request, res: Response) {
    try {
      const allRecords = await this.calendarService.getAll();

      this.sendOk(res, allRecords);
    } catch(e) {
      this.sendFail(res, String(e));
    }
  }

  private async deleteRecord(req: Request, res: Response) {
    try {

      const deletedRecord = this.calendarService.delete(req.body.recordId);

      this.sendOk(res, deletedRecord);
    } catch (e) {
      this.sendFail(res);
    }
  }

  private async putRecord(req: Request, res: Response) {
    try {

      const updatedRecord = await this.calendarService.update(
        req.body.id,
        req.body.name,
        req.body.phone,
        req.body.date
      );
      
      this.sendOk(res, updatedRecord);
    } catch (e) {
      this.sendFail(res);
    }
  }

  getRouterConfig() {
    return [
      {
        method: "put",
        path: "/",
        handler: this.putRecord.bind(this),
        middleware: [],
      },
      {
        method: "post",
        path: "/",
        handler: this.addRecord.bind(this),
        middleware: [],
      },
      {
        method: "get",
        path: "/",
        handler: this.getRecords.bind(this),
        middleware: [],
      },
      {
        method: "get",
        path: "/all",
        handler: this.getAllRecords.bind(this),
        middleware: [],
      },
      {
        method: "delete",
        path: "/",
        handler: this.deleteRecord.bind(this),
        middleware: [],
      },
    ] as RouterConfigItem[];
  }
}
