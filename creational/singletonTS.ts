
class SingletonTS {

    private static instance: SingletonTS;
    private version: string;

    private constructor(version: string){
        this.version = version;
    }

    public static getInstance(version: string): SingletonTS{
        if(!SingletonTS.instance){
            SingletonTS.instance = new SingletonTS(version);
        }
        return SingletonTS.instance;
    }
}

function appSingletonTS(){

    const SingletonTS1 = SingletonTS.getInstance('version-1');
    const SingletonTS2 = SingletonTS.getInstance('version-2');
    const SingletonTS3 = SingletonTS.getInstance('version-3');

    console.log(SingletonTS1===SingletonTS2);
    console.log(SingletonTS2===SingletonTS3);
    console.log(SingletonTS1===SingletonTS3);
    
}

appSingletonTS()