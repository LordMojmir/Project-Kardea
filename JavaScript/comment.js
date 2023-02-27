    //const messagesRef = db.ref("messages");


var firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  };
  firebase.initializeApp(firebaseConfig);

  // Create Firestore database reference
  var db = firebase.firestore();

  // Add comment to Firestore
  function addComment() {
    var name = document.getElementById("name").value;
    var comment = document.getElementById("comment").value;
    db.collection("comments").add({
      name: name,
      comment: comment,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
  }

  // Display comments from Firestore
  function displayComments() {
    var commentsRef = db.collection("comments").orderBy("timestamp", "desc");
    commentsRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var commentData = doc.data();
        var commentDiv = document.createElement("div");
        var nameP = document.createElement("p");
        var commentP = document.createElement("p");
        nameP.innerHTML = commentData.name;
        commentP.innerHTML = commentData.comment;
        commentDiv.appendChild(nameP);
        commentDiv.appendChild(commentP);
        document.getElementById("comments").appendChild(commentDiv);
      });
    });
  }
















// const sendMessageButton = document.getElementById("sendMessageButton");
// const messageInputFromChat = document.getElementById("message-input");









// sendMessageButton.onclick = () => {
//   if (
//     messageInputFromChat.value != "" &&
//     messageInputFromChat.value != undefined &&
//     messageInputFromChat.value != null
//   ) {
//     const user = firebase.auth().currentUser;
//     const { serverTimestamp } = firebase.firestore.FieldValue;
//     const now = new Date();

//     let message = {
//       date: serverTimestamp(),
//       timestampField: now,
//       sender: user.uid,
//       content: messageInputFromChat.value,
//     };

//     // Get a reference to the chat document with the matching userOne and userTwo values
//     let chatRef = db
//       .collection(`chats`)
//       .where("userOne", "==", getAlphaFirst(user.uid, currentToUserUID))
//       .where("userTwo", "==", getAlphaSecond(user.uid, currentToUserUID))
//       .limit(1)
//       .get()
//       .then((snapshot) => {
//         console.log("Snapshot: " + snapshot.id);
//         // Get the chat document from the snapshot
//         let chatDoc = snapshot.docs[0];
//         // Get a reference to the messages subcollection of the chat document
//         let messagesRef = chatDoc.ref.collection("messages");
//         // Add the message to the messages subcollection
//         messagesRef.add(message).then((doc) => {
//           // Retrieve the document data
//           doc.get().then((docData) => {
//             const when = docData.data().date;
//             const timeString = when
//               .toDate()
//               .toLocaleTimeString("de-DE", {
//                 hour: "numeric",
//                 minute: "numeric",
//               });
//             const dateString = when
//               .toDate()
//               .toLocaleDateString("en-GB", {
//                 month: "2-digit",
//                 day: "2-digit",
//               });
//             const createdAtString = `${timeString} ${dateString}`;
//             sentMessageDisplay(docData.data().content, createdAtString);
//           });
//         });
//       }).then(() => {
//         let messageInput = document.querySelector("#message-input");
//         messageInput.value = "";
//       });
//   }else{
//     console.log("No messages");
//   }
// };

// function createChat(toUID, fromUID) {
//   var chatRef = db.collection(`chats`).doc();
//   const messagesRef = chatRef.collection("messages");
//   const { serverTimestamp } = firebase.firestore.FieldValue;
//   console.log(
//     "User One",
//     toUID.localeCompare(fromUID) < 0 ? toUID : fromUID,
//     "User Two: ",
//     toUID.localeCompare(fromUID) > 0 ? toUID : fromUID
//   );

//   console.log(
//     chatRef.set(
//       {
//         createdAt: serverTimestamp(),
//         //usersRef: [toUID, fromUID],
//         userOne: getAlphaFirst(toUID, fromUID),
//         userTwo: getAlphaSecond(toUID, fromUID),
//       },
//       { merge: true }
//     )
//   );
//   messagesRef.add({});
// }


// function hasAChat(withUID) {
//   const user = firebase.auth().currentUser;

//   db.collection(`chats`)
//     .where("userOne", "==", getAlphaFirst(user.uid, withUID))
//     .where("userTwo", "==", getAlphaSecond(user.uid, withUID))
//     .get()
//     .then((snapshot) => {
//       if (!snapshot.empty) {
//         console.log("Creating Chat 1.");
//         return true;
//       } else {
//         console.log("Creating Chat");
//         createChat(user.uid, withUID);
//         return false;
//       }
//     });
// }

// function findAllYourChats() {
//   let finalResult = ``;
//   let i = 0;
//   let result = ``;
//   const user = firebase.auth().currentUser;
//   var userRef = db.collection("users").doc(user.uid);
//   var friends;

//   userRef
//     .get()
//     .then((doc) => {
//       if (doc.exists) {
//         friends = doc.data().friends;
//         if (friends != undefined) {
//           db.collection("users")
//             .get()
//             .then((querySnapshot) => {
//               for (const doc of querySnapshot.docs) {
//                 if (friends.length > 0) {
//                   if (friends.includes(doc.id)) {
//                     var storageRef = firebase.storage().ref();
//                     var avatarRef = storageRef.child(doc.id + "/avatar.jpg");
//                     var imgURL =
//                       "https://www.w3schools.com/howto/img_avatar.png";
//                     avatarRef
//                       .getDownloadURL()
//                       .then((metadata) => {
//                         // Metadata now contains the metadata for 'images/forest.jpg'
//                         imgURL = metadata;
//                         // console.log("Metadata: ", imgURL);
//                       })
//                       .catch((error) => {
//                         //console.log("IMG Error URL: ", imgURL);
//                       })
//                       .then(() => {
//                         if (i == 0) {
//                           finalResult += `<div class="row">`;
//                         }
//                         finalResult += displayProfilesOfFriends(
//                           doc,
//                           "Hello",
//                           imgURL
//                         );
//                         if (i == friends.length - 1) {
//                           console.log(friends.length);
//                           finalResult += `</div>`;
//                         }

//                         let gender = doc.data().gender;
//                         imgURL =
//                           gender == "Male" || gender == "Not Found"
//                             ? "https://www.w3schools.com/howto/img_avatar.png"
//                             : "https://www.w3schools.com/howto/img_avatar2.png";

//                         i++;
//                       })
//                       .then(() => {
//                         displayAreaForAllYourContacts.innerHTML = finalResult;
//                       });
//                   }
//                 } else {
//                   displayAreaForAllYourContacts.innerHTML = `<h1>No Friends yet</h1>`;
//                 }
//               }
//             });
//         } else {
//           displayAreaForAllYourContacts.innerHTML = `<h1>No Friends yet</h1><p>You have to add Friends first to chat with someone</p>`;
//         }
//       }
//     })
//     .catch((error) => {
//       console.log("Error getting document:", error);
//     });
// }

// function displayProfilesOfFriends(doc, lastMessage, imgURL) {
//   let result = ``;

//   result += `
//                           <div class=" col-md-12  m-1 card">
//                                 <div class="container" onclick="findAllYourMessages('${
//                                   doc.id}', '${imgURL}','${doc.data().displayName
//                                 }')">
//                                    <div class="row">
//                                         <div class="col-4">
//                                             <img src="${imgURL}" alt="IMG" style="width: 5rem; height: auto; max-height: 5rem;)"
//                                                 class="  mx-auto my-3  rounded-circle">
//                                         </div>
//                                         <div class="col-8 ">
//                                             <h3">${doc.data().displayName}</h3>
//                                             <div>
//                                             <p class="disabled"><small>${lastMessage}</small></p></div>
//                                         </div>
                      
//                                     </div>
//                                 </div>
//                             </div>
//         `;

//   return result;
// }

// function findAllYourMessages(fromUID, imgURL, name) {
//   if (hasAChat(fromUID)) {
//     console.log("Has a chat");
//   } else {
//     console.log("Has no chat");
//   }
//   // console.log("FromUID: ", fromUID);
//   const user = firebase.auth().currentUser;
//   if (currentToUserUID != fromUID) {
//     messageDisplay.innerHTML = "";
//     currentlyDisplayingMessages = [];
//     currentToUserUID = fromUID;
//   }
//   openNav();
//   headerForProfile.innerHTML = generateHeaderWithNameAndIMG(name,imgURL);


//   db.collection("chats")
//     .where("userOne", "==", getAlphaFirst(user.uid, fromUID))
//     .where("userTwo", "==", getAlphaSecond(user.uid, fromUID))
//     .get()
//     .then((snapshot) => {
//       if (snapshot != undefined) {
//         snapshot.forEach((doc) => {
//           if (doc.exists) {
//             // Get the messages subcollection of the chat
//             const messagesRef = doc.ref.collection("messages");
//             // Retrieve the messages from the subcollection, ordered by the 'timestampField' field
//             messagesRef
//               .orderBy("timestampField")
//               .onSnapshot((messagesSnapshot) => {
//                 // Iterate through the messages and log them to the console
//                 messagesSnapshot.forEach((messageDoc) => {
//                   console.log(messageDoc.id, "=>", messageDoc.data());
//                   if (!currentlyDisplayingMessages.includes(messageDoc.id)) {
//                     currentlyDisplayingMessages.push(messageDoc.id);
//                     displayMessage(
//                       messageDoc.data().content,
//                       messageDoc.data().sender,
//                       messageDoc.data().date
//                     );
//                   }
//                 });
//               });
//           } else {
//             console.log("No chat found");
//           }
//         });
//       } else {
//         console.log("No chat found");
//       }
//     })
//     .catch(() => {
//       console.log("No snapshot");
//       console.log("Error getting chats: ", error);

//     })
//   }
