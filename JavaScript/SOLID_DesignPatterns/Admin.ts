interface Create {
    createPost(): void;
} 
interface Delete {
    deletePost(): void;
}
interface View {
    viewStats(): void;
} 
 interface Ban{   
    banUser(): void;
}

class Admin implements Create, Delete ,View,Ban {
    createPost(): void {
        console.log('Admin created post');
    };
    deletePost(): void {
       console.log('Admin deleted post');
    };
    viewStats(): void{
       console.log('Admin is viewing post');
    };
    banUser(): void {
       console.log('Admin banned a user');
    };
}

class Moderator  implements Delete, Ban {
    deletePost(): void {
       console.log('Moderator deleted post');
    };
    banUser(): void {
       console.log('Moderator banned a user');
    };
}
class Viewer  implements View {
    viewStats(): void{
       console.log('Viewer is viewing post');
    };
}

const admin = new Admin();
const moder = new Moderator();
const viewer = new Viewer();

admin.createPost();
moder.banUser();
viewer.viewStats();