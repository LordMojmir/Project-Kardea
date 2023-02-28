console.log("Commetn.js successfully loaded");
var db = firebase.firestore();

// Add comment to Firestore
function addComment() {
  var name = document.getElementById("first-name").value;
  var nachName = document.getElementById("surname").value;
  var comment = document.getElementById("comment").value;
  var detail = document.getElementById("detail").value;

  db.collection("comments")
    .add({
      name: name,
      nachName: nachName,
      comment: comment,
      detail: detail,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
}

// Display comments from Firestore
function displayComments() {
  var commentsRef = db.collection("comments").orderBy("timestamp", "desc");
  let i = 0;
  commentsRef.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (i % 2 == 0) var commentData = doc.data();
      getLeftComment(commentData.name, commentData.comment, commentData.detail);
    });
  });
}

function getLeftComment(username, comment, details) {
  let result = `
  <div class="comment gradient-border reveal">
                <div id="" class="com-writer">${username}</div>
                <div id="" class="com-data">${details}</div>
                <div id="" class="com-text">
                  ${comment}  
                </div>
            </div>`;
  document.getElementById("comment-section").innerHTML += result;
}

function getRightComment(username, comment, details) {
  let result = `
             <div class="comment gradient-border reveal">
                <div id="" class="com-writer">${username}</div>
                <div id="" class="com-data">${details}</div>
                <div id="" class="com-text">
                  ${comment}
                </div>
            </div>`;
  document.getElementById("comment-section").innerHTML += result;
}

window.onload = function () {
  displayComments();
};

function reloadPage() {
  setTimeout(function() {
    location.reload();
  }, 2000);
}
