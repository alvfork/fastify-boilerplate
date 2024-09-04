import { CreateCompanyBody } from "../../types";

export const createCompany = async (data: CreateCompanyBody) => {
    // Business logic for creating a company
    return { message: "Company created", data };
};
