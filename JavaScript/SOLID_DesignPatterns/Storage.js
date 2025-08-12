var LocalStorage = /** @class */ (function () {
    function LocalStorage() {
    }
    LocalStorage.prototype.upload = function (file) {
        console.log("UpLoading ".concat(file, " from Local Storage"));
    };
    LocalStorage.prototype.download = function (filename) {
        console.log("Downloading ".concat(filename, " from Local Storage"));
    };
    LocalStorage.prototype.delete = function (filename) {
        console.log("Deleting ".concat(filename, " from Local Storage"));
    };
    return LocalStorage;
}());
var CloudStorage = /** @class */ (function () {
    function CloudStorage() {
    }
    CloudStorage.prototype.download = function (filename) {
        console.log("Downloading ".concat(filename, " from Cloud Storage"));
    };
    return CloudStorage;
}());
function fetchPrint(storage, filename) {
    return storage.download(filename);
}
var local = new LocalStorage();
var cloud = new CloudStorage();
fetchPrint(local, "Text.txt");
fetchPrint(cloud, "Text.txt");
