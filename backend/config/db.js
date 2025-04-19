import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Tanya:99131313@cluster0.hnumy.mongodb.net/food-del').then(() => console.log("DB Connected")).catch((e) => console.log('error while connecting db', e));
}