import axios from "axios";

const deleteCookie = async (name: string) => {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    try {
        console.log("login out with brauth");
        const r = await axios.post("https://brauth.minsky.cc/login?logout=true");
        console.log(r);
    } catch (err) {
        console.log(err);
    }
};

export { deleteCookie };
