interface IReadableStorage {
    download(filename: string): void;
}
interface IWritableStorage {
    upload(file:string): void;
    delete(filename:string): void;
}

class LocalStorage implements IReadableStorage,IWritableStorage {
    upload(file:string): void {
        console.log(`UpLoading ${file} from Local Storage`);  
    }
    download(filename: string): void {
       console.log(`Downloading ${filename} from Local Storage`);  
    }
    delete(filename:string): void {
       console.log(`Deleting ${filename} from Local Storage`);  
    }
}
class CloudStorage implements IReadableStorage {
    download(filename: string): void {
        console.log(`Downloading ${filename} from Cloud Storage`);  
    }
}

function fetchPrint(storage: IReadableStorage, filename: string) {
     return storage.download(filename);
}

let local = new LocalStorage();
let cloud = new CloudStorage();

fetchPrint(local,"Text.txt")
fetchPrint(cloud,"Text.txt")
