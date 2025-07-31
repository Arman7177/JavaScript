class StorageProvider {
    constructor(){
        if (new.target === StorageProvider){
           throw new Error("Cannot instantiate abstract class StorageProvider directly.");
        }
    }
    upload(file) {
        throw new Error("Abstract method 'upload()' must be implemented in subclass.");
    }
    download(filename) {
        throw new Error("Abstract method 'download()' must be implemented in subclass.");
    }
}

class LocalStorageProvider extends StorageProvider {
    constructor() {
        super();
    }
    upload(file) {
        console.log(`Uploading ${file} to local storage...`);
    }
    download(filename) {
        console.log(`Downloading ${filename} from local storage`);
    }

}
class CloudStorageProvider extends StorageProvider {
  upload(file) {
    console.log(`Uploading ${file} to cloud...`);
  }

  download(filename) {
    console.log(`Downloading ${filename} from cloud...`);
  }
}

function useStorage(provider){
      if (typeof provider.upload !== 'function') {
        throw new Error("The provider must implement upload() method");
      }
      if (typeof provider.download !== 'function') {
        throw new Error("The provider must implement download() method");
      }

    provider.upload("Test.txt");
    provider.download("Test.txt");

}

const local = new LocalStorageProvider();
useStorage(local);

const cloud = new CloudStorageProvider();
useStorage(cloud);

// Uploading Test.txt to local storage...
// Downloading Test.txt from local storage
// Uploading Test.txt to cloud...
// Downloading Test.txt from cloud...