import axios from "axios";

const deleteCookie = async (name: string) => {
    // document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    try {
        const r = await axios.get("https://bauth.minsky.cc/login?logout=true");
        console.log(r);
    } catch (err) {
        console.log(err);
    }
};

export { deleteCookie };
