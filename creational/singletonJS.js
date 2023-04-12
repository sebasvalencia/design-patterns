class SingletonJS {
  static instance = undefined;

  constructor(version) {
    this.version = version;
  }

  static getInstance(version) {
    if (!SingletonJS.instance) {
      SingletonJS.instance = new SingletonJS(version);
    }
    return SingletonJS.instance;
  }
}

function appSingletonJS(){

    const SingletonJS1 = SingletonJS.getInstance('version-1');
    const SingletonJS2 = SingletonJS.getInstance('version-2');
    const SingletonJS3 = SingletonJS.getInstance('version-3');

    console.log(SingletonJS1===SingletonJS2);
    console.log(SingletonJS2===SingletonJS3);
    console.log(SingletonJS1===SingletonJS3);

    
}

appSingletonJS();
