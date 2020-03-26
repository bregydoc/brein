import axios from "axios";

const deleteCookie = async (name: string) => {
    // document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=minsky.cc";
    try {
        console.log("login out with brauth by next api");
        const r = await axios.get("https://brein.minsky.cc/api/logout");
        console.log(r);
    } catch (err) {
        console.log(err);
    }
};

export { deleteCookie };
