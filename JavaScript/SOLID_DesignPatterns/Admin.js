var Admin = /** @class */ (function () {
    function Admin() {
    }
    Admin.prototype.createPost = function () {
        console.log('Admin created post');
    };
    ;
    Admin.prototype.deletePost = function () {
        console.log('Admin deleted post');
    };
    ;
    Admin.prototype.viewStats = function () {
        console.log('Admin is viewing post');
    };
    ;
    Admin.prototype.banUser = function () {
        console.log('Admin banned a user');
    };
    ;
    return Admin;
}());
var Moderator = /** @class */ (function () {
    function Moderator() {
    }
    Moderator.prototype.deletePost = function () {
        console.log('Moderator deleted post');
    };
    ;
    Moderator.prototype.banUser = function () {
        console.log('Moderator banned a user');
    };
    ;
    return Moderator;
}());
var Viewer = /** @class */ (function () {
    function Viewer() {
    }
    Viewer.prototype.viewStats = function () {
        console.log('Viewer is viewing post');
    };
    ;
    return Viewer;
}());
var admin = new Admin();
var moder = new Moderator();
var viewer = new Viewer();
admin.createPost();
moder.banUser();
viewer.viewStats();
