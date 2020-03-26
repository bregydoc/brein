import axios from "axios";

const insertParam = (key: string, value: string) => {
    if (history.pushState) {
        let searchParams = new URLSearchParams(window.location.search);
        searchParams.set(key, value);
        let newurl =
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            "?" +
            searchParams.toString();
        window.history.pushState({ path: newurl }, "", newurl);
    }
};

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

export { deleteCookie, insertParam };
