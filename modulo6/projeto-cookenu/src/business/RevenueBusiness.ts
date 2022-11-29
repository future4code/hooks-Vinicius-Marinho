import { RevenueDatabase } from './../data/RevenueDatabase';
import { CustomError, Unauthorized } from './../error/customError';
import { GetRevenuesUserInputDTO, revenue, RevenueInputDTO } from './../model/revenue';
import { IdGenerator } from './../services/IdGenerator';
import moment from "moment"

const idGenerator = new IdGenerator();
const revenueDatabase = new RevenueDatabase()

export class RevenueBusiness {
    async createRevenue(input: RevenueInputDTO) {
        try {
            const { title, description, token } = input;

            if (!title || !description) {
                throw new CustomError(
                    400,
                    'Preencha os campos "title" e "description"'
                );
            }

            const id: string = idGenerator.generateId()
            const date: Date = new Date()


            const revenue: revenue = {
                id,
                title,
                description,
                date
            }

            const result = await revenueDatabase.createRevenue(revenue)



        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }

    public getRevenue = async (input: GetRevenuesUserInputDTO) => {
        try {
            const { token, id } = input

            if (!token) {
                throw new Unauthorized()
            }

            const revenueDatabase = new RevenueDatabase()
            const result = await revenueDatabase.findRevenueById(id)

            result.date = moment(result.date).format("DD/MM/YYYY")

            const revenues = {
                id: result.id,
                title: result.title,
                description: result.description,
                date: result.date
            }

            return revenues
        } catch (error: any) {
            throw new CustomError(400, error.message);
        }

    }
}