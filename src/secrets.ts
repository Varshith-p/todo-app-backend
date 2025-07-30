import dotenv from "dotenv";

dotenv.config({ path: ".env" });

export const PORT = process.env.PORT || 5000;
export const DATABASE_URL = process.env.DATABASE_URL || "";
