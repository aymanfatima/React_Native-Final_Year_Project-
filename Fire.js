import * as firebase from 'firebase'
import 'firebase/firestore';

class Fire {
    constructor() {
         if (!firebase.apps.length) {
         // firebase.initializeApp(firebaseConfig);
         }
        }
     


    uploadPhotoAsync = async uri => {
        const path = `manager/${Date.now()}.jpg`
        return new Promise(async (res, rej) => {
            const response = await fetch(uri)
            const file = await response.blob()
            let upload = firebase.storage().ref(path).put(file)
            upload.on('state_changed', snapshot => {
            }, err => {
                rej(err)
            }, async () => {
                const url = await upload.snapshot.ref.getDownloadURL()
                res(url)
            })
        })

    }


    // addPhoto = async (localUri) => {
    //     const remoteUri = await this.uploadPhotoAsync(localUri)
    //     return new Promise((res,rej)=>{
    //         firebase.database().ref('manager').push({
    //             image:remoteUri,
    //             timestamp:this.timestamp,    
    //         })
    //         .then(ref=>{
    //             res(ref)
    //         })
    //         .catch(err=>{
    //             rej(err)
    //         })
    //     })
    // }
    get timestamp() {
        return Date.now()
    }
}

Fire.shared = new Fire()
export default Fire;