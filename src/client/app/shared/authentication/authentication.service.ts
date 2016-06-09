import { Injectable } from '@angular/core';

declare var firebase: any;

@Injectable()
export class AuthenticationService {
    private _signUpSuccessCallback: any;
    private _signUpFailedCallback: any;
    private _signInSuccessCallback: any;
    private _signInFailedCallback: any;
    private _signOutSuccessCallback: any;
    private _signOutFailedCallback: any;

    getUserId(): string {
        return firebase.auth().currentUser.uid;
    }

    signUp(email: string, password: string, phoneNumber: string, identityNum: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                 firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
                     let uid = firebase.auth().currentUser.uid;
                     firebase.database().ref('users/').child(uid).set({
                        cart: {},
                        identityNumber: identityNum,
                        phone: phoneNumber,
                        orders: {}
                    });

                    this._signUpSuccessCallback();
                 });

            })
            .catch(this._signUpFailedCallback);

            // set phoneNumber, set identityNumber
    }

    signInWithEmailAndPassword(email: string, password: string): void {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this._signInSuccessCallback)
            .catch(this._signInFailedCallback);
    }

    signInWith(providerString: string) {
        var provider: any;

        switch (providerString.toLowerCase()) {
            case "google":
                provider = new firebase.auth.GoogleAuthProvider();
                break;
            case "facebook":
                provider = new firebase.auth.FacebookAuthProvider();
                break;
            default:
                console.log("Provider is not supported");
                break;
        }

         firebase.auth().signInWithPopup(provider)
            .then(() => {                
                let uid = firebase.auth().currentUser.uid;
                if (firebase.database().ref('users/' + uid) == null) {
                    firebase.database().ref('users/').child(uid).set({
                        email: firebase.auth().currentUser.providerData[0].email,
                        cart: {},
                        orders: {}
                    });
                } 
                
                this._signInSuccessCallback();
            })
            .catch(this._signInFailedCallback);
    }

    signOut(): void {
        firebase.auth().signOut()
            .then(this._signOutSuccessCallback)
            .catch(this._signOutFailedCallback);
    }

    isSignIn(): boolean {
        return (firebase.auth().currentUser != null);
    }

    setSignUpSuccessCallback(callback: any) {
        this._signUpSuccessCallback = callback;
    }
    
    setSignUpFailedCallback(callback: any) {
        this._signUpFailedCallback = callback;
    }

    setSignInSuccessCallback(callback: any) {
        this._signInSuccessCallback = callback;
    }
    
    setSignInFailedCallback(callback: any) {
        this._signInFailedCallback = callback;
    }

    setSignOutSuccessCallback(callback: any) {
        this._signOutSuccessCallback = callback;
    }
    
    setSignOutFailedCallback(callback: any) {
        this._signOutFailedCallback = callback;
    }
}