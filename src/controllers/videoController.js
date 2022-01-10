export const trending = (req, res) => res.render("home"); // globalRouter
export const search = (req, res) => res.send("Search"); // globalRouter

////////////////////////////////

export const see = (req, res) => {
    return res.render("watch");
}; //videoRouter

export const edit = (req, res) => {
    return res.render("edit");
}; //videoRouter

export const upload = (req, res) => res.send("Upload"); //videoRouter

export const deleteVideo = (req, res) => {
    return res.send("Delete Video");
}; //videoRouter
