export type TypeMenu = {
   name: string;
   href: string;
}

export type TypeFooterMenu = {
   caption: string;
   subItems: TypeMenu[];
}

type TypeVideo = {
   id: number;
   path: string;
   // user: TypeUser;
}

type TypeUser = {
   id: number;
   userName: string;
   video: TypeVideo[]
}

type TypePost = {
   id: number;
   title: string;
   user: TypeUser
   type: 'POST' | 'VIDEO';
   videoPath?: string;
   thumbnail: TypeImage;
}

type TypeImage = {
   id: number;
   path: string;
   size: string;
   extention: string
}

const post: TypePost = {
   id: 1,
   title: "Post 1",
   user: {
      id: 1,
      userName: "Nhi",
      video: [
         { id: 1, path: "abc.com/post.jpg" },
         { id: 2, path: "abc.com/post.jpg" },
         { id: 3, path: "abc.com/post.jpg" },
      ]
   },
   type: "POST",
   thumbnail: {
      id: 1,
      path: "abc.com/post.jpg",
      size: "50x60",
      extention: ".jpg"
   }
}
