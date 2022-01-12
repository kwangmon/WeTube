export const trending = (req, res) => {
    const videos = [
        {
            title: "First Video",
            rating:5,
            comments:2,
            createdAt: "2 minutes ago",
            views:59,
            id:1
        },
        {
            title: "Second Video",
            rating:5,
            comments:2,
            createdAt: "2 minutes ago",
            views:59,
            id:1
        },
        {
            title: "Third Video",
            rating:5,
            comments:2,
            createdAt: "2 minutes ago",
            views:59,
            id:1
        },
    ];
    return res.render("home", { PageTitle: "Home", videos })
}; // globalRouter
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
