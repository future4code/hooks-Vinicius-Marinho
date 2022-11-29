import { CustomError } from './../error/customError';

import { revenue } from '../model/revenue';
import { BaseDatabase } from './BaseDatabase';

export class RevenueDatabase extends BaseDatabase {
    public createRevenue = async (revenue: revenue) => {
        try {
            await RevenueDatabase.connection("Cookenu_revenues")
                .insert({
                    id: revenue.id,
                    title: revenue.title,
                    description: revenue.description,
                    date: revenue.date
                })
        } catch (error: any) {
            throw new CustomError(400, error.message);
        }
    }

    public findRevenueById = async (id: string) => {
        try {
            const result = await RevenueDatabase.connection("Cookenu_revenues")
                .select()
                .where({ id })

            return result[0]

        } catch (error: any) {
            throw new CustomError(400, error.message);
        }
    }
}