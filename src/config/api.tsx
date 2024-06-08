import axios from "axios";

declare global {
    interface ImportMetaEnv {
      readonly VITE_BASE_URL: string;
    }
  
    interface ImportMeta {
      readonly env: ImportMetaEnv;
    }
  }
const api=axios.create({
    baseURL:import.meta.env.VITE_BASE_URL,
    headers:{
        "Content-Type":"application/json"},
})
export default api