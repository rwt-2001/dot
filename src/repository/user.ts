import { User, UserModel } from "../model/user";

const getUserByEmail = async (email: string): Promise<User | null> => UserModel.findOne({ email: email.toLowerCase() })
const getUserByid = async (id: string): Promise<User | null> => await UserModel.findById(id)
const updateUserById = (id: string, values: Record<string, any>) => UserModel.findByIdAndUpdate(id, values)
const getEmailCount = async (email: string): Promise<number> => UserModel.countDocuments({ email: email.toLowerCase() })
const getUserNameCount = async (userName: string): Promise<number> => UserModel.countDocuments({ user_name: userName.toLowerCase() });
const createUser = (values: Record<string, any>): Promise<User | null> => new UserModel(values)
    .save().
    then((user) => user.toJSON());


export default {
    getUserByEmail,
    getUserByid,
    updateUserById,
    createUser,
    getEmailCount,
    getUserNameCount
}