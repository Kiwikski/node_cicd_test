let username = "kiwikski";
let password = "1qa@WS3ed$RF";
// let username = "atlasAdmin";
// let password = "admin";
let domain = "cluster0.hgf3s.mongodb.net";

module.exports = {
    url: "mongodb+srv://"+username+":"+password+"@"+domain+"/test?retryWrites=true&w=majority"
};
