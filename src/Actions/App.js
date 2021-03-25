import axios from "axios";

export const getSearchData = async (searchData,rand) => {
    let result = {};
    try {
        const res = await axios.get(
            `https://insta.faceai.live/Insta?username=${searchData}&mode=0&session=${rand}`,
        );
        result = res.data || {};
        return {success: true, data: result};
    } catch (err) {
        console.log("error in getting time info : ", err);
        return {
            success: false,
            message: (err) || "something went wrong"
        };
    }
};

export const intervalgetSearchData = async (searchData,rand) => {
    let result = {};
    try {
        const res = await axios.get(
            `https://insta.faceai.live/Insta?username=${searchData}&mode=0&session=${rand}`,
        );
        result = res.data || {};
        return {success: true, data: result};
    } catch (err) {
        console.log("error in getting time info : ", err);
        return {
            success: false,
            message: (err) || "something went wrong"
        };
    }
};

