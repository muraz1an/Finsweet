export const host = 'http://localhost:3000';
export const environment = {
  production: true,
  categs: {
    get: host + '/Category'
  },
  minPost: {
    get: host + '/minPost'
  },
  Socials: {
    get: host + '/Socials'
  },
  categPost: {
    get: host + "/categPost"
  },
  readBlock: {
    get: host + '/readBlock'
  },
  postsall: {
    get: host + '/postsall'
  },
  myPost: {
    get: host + '/myPost'
  },
  allAutors: {
    get: host + '/allAutors'
  }
 
};