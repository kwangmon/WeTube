export const trending = (req, res) => res.send("Home Page Videos"); // globalRouter
export const search = (req, res) => res.send("Search"); // globalRouter

////////////////////////////////

export const see = (req, res) => {
    return res.send(`Watch Video #${req.params.id}`);
}; //videoRouter

export const edit = (req, res) => {
    return res.send("Edit");
}; //videoRouter

export const upload = (req, res) => res.send("Upload"); //videoRouter

export const deleteVideo = (req, res) => {
    return res.send("Delete Video");
}; //videoRouter
