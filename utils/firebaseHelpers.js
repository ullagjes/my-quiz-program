import firebaseInstance from './firebase';

const userCollection = firebaseInstance
.firestore()
.collection('users')

const runningCollection = firebaseInstance
.firestore()
.collection('running')

//========================USERDATA

export async function createUserInFirestore(userId){
  try{
    await userCollection.doc(userId)
    .set({
      userId: userId
    })
  } catch(error){
    console.log(error)
  }
}

export async function checkForUserData(userId){
  try { 
    const array = []
    
    let selectedUserCollection = await userCollection.doc(userId)
    let selectedUserQuizCollection = await selectedUserCollection.collection('quizes').get()
    
    selectedUserQuizCollection.forEach(item => {
      array.push({
        id: item.id,
        ...item.data()
      })
    })

    return(array)

  } catch(error){
      return console.log('error when fetching userdata',error)
  }

}

export async function handleSignOut(){
  try{
    await firebaseInstance.auth().signOut()
  } catch(error){
    console.log(error)
  }
}

//==========================CREATE QUIZ

export async function createQuizPin(){
  try{
    const pinRef = firebaseInstance
    .firestore()
    .collection('globals')
    .doc('A3xMG5HOTnEpws1AASxC')
  
    await firebaseInstance.firestore().runTransaction((transaction) => {
      return transaction.get(pinRef).then((doc) => {
        const count = doc.data().counter
        let newCount = count + 1
        transaction.update(pinRef, {counter: newCount})
      })
    })
  } catch(error){
    console.log('error when creating quizpin', error)
  }
}

export async function createQuizDocument(userId, quizPin, quizName) {
  try{
    await userCollection
    .doc(userId)
    .collection('quizes')
    .doc(quizPin)
    .set({
      count: 0,
      quizPin: quizPin,
      quizName: quizName,
      isActive: false,
      isWaitingRoomActive: true
    }, {merge: true})
  } catch(error){
    console.log('error when creating quiz document', error)
  }
}

export async function addQuestionToDocument(
  userId, 
  quizPin,
  counter,
  values
  ) {
  try {
    await userCollection
    .doc(userId)
    .collection('quizes')
    .doc(quizPin)
    .collection('questions').doc(`question_${counter}`)
    .set({
        id: `question_${counter}`,
        title: values.title,
        options: {
            option_one: values.option_one,
            option_two: values.option_two,
            option_three: values.option_three,
            option_four: values.option_four,
          },
        correctAnswers: values.correctAnswers
        }, {merge: true}) 
    } catch(error){
      console.log('error when adding question to document', error)
    } 
}

//======================== EDIT QUIZ DATA

export async function updateQuestionData(userId, quizPin, questionId, values){
  try{
    await userCollection
    .doc(userId)
    .collection('quizes')
    .doc(quizPin)
    .collection('questions')
    .doc(questionId)
    .update({
        title: values.title,
        options: {
            option_one: values.option_one,
            option_two: values.option_two,
            option_three: values.option_three,
            option_four: values.option_four,
          },
        correctAnswers: values.correctAnswers
        }, {merge: true})
  } catch(error){
    console.log('error when updating question', error)
  }
}

//======================EXTRACT QUIZDATA

export async function getQuizTitle(userId, quizPin){
  if(userId){
    try {
      let title = await userCollection
        .doc(userId)
        .collection('quizes')
        .doc(quizPin)
        .get()
        .then((doc) => {
          if(doc.exists){
            return (doc.data().quizName)
          } else {
            return ('Not found')
          }
      })
      return title
    } catch(error){
      return console.log('error when fetching quizdata', error)
    }
  }  
}

export async function getQuestionData(user, quizPin, questionId){
  try{
    let document = await userCollection
    .doc(user)
    .collection('quizes')
    .doc(quizPin)
    .collection('questions')
    .doc(questionId)
    .get()
    .then((doc) => {
        if (doc.exists){
            return doc.data()
        } else {
            console.log('does not exist')
        }
    })
  
    return document
  } catch(error){
    console.log('error when geting question data', error)
  }
}

export async function countCollection(user, quizPin){
  const array = []
  try{
    await firebaseInstance
      .firestore()
      .collection('users')
      .doc(user)
      .collection('quizes')
      .doc(quizPin)
      .collection('questions')
      .get()
      .then(snap => {
              array.push(snap.size)
          })
      return(array)
  } catch(error){
    console.log('error when counting collection length', error)
  }
}

//=========================RESET QUIZ DATA

export async function resetQuiz(quizPin, participants) {
try {
  await runningCollection
  .doc(quizPin)
  .update({
    count: 0,
    isActive: false,
    isPending: false,
    isWaitingRoomActive: true,
    hasEnded: true
  })

  return deleteEachUserAnswers(quizPin, participants)
  } catch(error){
    console.log('error when reseting quiz')
}

}

async function deleteEachUserAnswers(quizPin, participants){
  
  const colRef = await firebaseInstance
  .firestore()
  .collection('running')
  .doc(quizPin)

  const participantsColl = await colRef
  .collection('participants')
  
  const questionCollection = colRef
  .collection('questions')
  
  const questionCol = await questionCollection.get()

  let array = []
  questionCol.forEach(i => {
    array.push(i.id)
  })
  
  await participants.forEach(i => {
    array.forEach(j => {
      questionCollection.doc(j)
      .collection('answers')
      .doc(i.id)
      .delete()

      participantsColl.doc(i.id)
      .collection('answers')
      .doc(j)
      .delete()
    })
  })

  await participants.forEach(i => {
    participantsColl
    .doc(i.id)
    .delete()
  })

}

//==========================SHOW LIVE QUIZDATA

export async function addQuizToRunningCollection(quizPin, selectedQuizData){
  console.log(selectedQuizData)
  try{

    const collection = firebaseInstance
    .firestore()
    .collection('running')
    .doc(quizPin)
    .collection('questions')
    
    await selectedQuizData.forEach(i => {
      collection.doc(i.id)
      .set({
        id: i.id,
        title: i.title,
        options: {
          option_one: i.options.option_one,
          option_two: i.options.option_two,
          option_three: i.options.option_three,
          option_four: i.options.option_four,
        },
        correctAnswers: i.correctAnswers,
        isSelected: false
    
      }, {merge: true})
    })
  } catch(error){
    console.error('error when adding quiz to running collection', error)
  }
}

export async function addTitleToRunningQuiz(quizPin, selectedQuizTitle){
  try{
    await firebaseInstance
    .firestore()
    .collection('running')
    .doc(quizPin)
    .set({
      title: selectedQuizTitle,
      count: 0,
      isActive: true,
      isPending: false,
      isWaitingRoomActive: true,
      hasEnded: false,
    }, {merge: true})

  } catch(error){
    console.error('error when adding quiztitle', error)
  }
}

export async function showCurrentQuestion(quizPin, questionId){
  try{
    await runningCollection
    .doc(quizPin)
    .collection('questions')
    .doc(questionId)
    .update({
      isSelected: true
    }, {merge: true})
  } catch(error){
    console.log('error when geting current question', error)
  }
}

export async function hideQuestions(quizPin, questions){
  try {
    const collection = await runningCollection
    .doc(quizPin)
    .collection('questions')
    
    await questions.forEach(i => {
      collection.doc(i.id)
      .update({
        isSelected: false
      }, {merge: true})
    })
  } catch(error){
    console.log('error when hiding questions', error)
  }
}

export async function countAnswers(quizPin, questionId){
  let array = []
  try{
    await runningCollection
    .doc(quizPin)
    .collection('questions')
    .doc(questionId)
    .collection('answers')
    .onSnapshot(snap => {
              array.push(snap.size)
          })
    return(array)
  } catch(error){
    console.log('error when counintg answers', error)
  }
}

//=========================PARTICIPANT DATA

export async function checkIfQuizExists(quizPin){
  try{
    let quizDoc = runningCollection
    .doc(quizPin)
    
    const checked = quizDoc.get()
    .then((doc) => {
      if(doc.exists){
        if(doc.data().isActive === true){
          return true
        }
        if(doc.data().isActive === false){
          return false
        }
      } else {
        return false
      }
    })
  
    return checked
  } catch(error){
    console.log('error when checking if quiz exists', error)
  }
}

export async function addParticipantToRunningQuiz(quizPin, userNickname) {
  try{
    const collection = firebaseInstance
    .firestore()
    .collection('running')
    .doc(quizPin)
    .collection('participants')
  
    const document = collection.doc(userNickname)
  
    const userDocument = document.get()
    .then((doc) => {
      if(doc.exists){
        return false
      } else {
        document.set({
          id: userNickname,
          points: 0,
          isPlaying: true,
        }, {merge: true})
      }
    })
  
    return userDocument
  } catch(error){
    console.log('error when adding participant to quiz', error)
  }
  
}

export async function submitAnswerToFireStore(
  quizPin, 
  userNickname, 
  questionId, 
  answer
  ) {
  try{
    const dbCol = firebaseInstance
    .firestore()
    .collection('running')
  
    const runningCollection = await dbCol.doc(quizPin)
    .collection('participants')
    
    const userAnswers = runningCollection.doc(userNickname)
    .collection('answers')
    
    const questionDoc = dbCol.doc(quizPin)
    .collection('questions')
    .doc(questionId)
  
    const currentAnswer = userAnswers.doc(questionId)
    
    let isAnswered = await currentAnswer.get()
    .then((doc) => {
      if(doc.exists){
        return true
      } else {
  
        questionDoc
        .collection('answers')
        .doc(userNickname)
        .set({answer: answer})
  
        currentAnswer.set({
          answer: answer}
          , {merge: true})
        return false
      }
    })
  
    return isAnswered
  } catch(error){
    console.log('error when submitting answer', error)
  }

}

export async function getCorrectAnswer(quizPin, questionId) {
  try{
    const correctAnswer = await firebaseInstance 
    .firestore()
    .collection('running')
    .doc(quizPin)
    .collection('questions')
    .doc(questionId)
    .get()
    .then((doc) => {
      return doc.data().correctAnswers
    })
  
    return correctAnswer;
  } catch(error){
    console.log('error when getting correct answer', error)
  }

}

export async function updateUserPoints(quizPin, userNickname, points) {
  if(points){

    try {
      const participantDocument = firebaseInstance
      .firestore()
      .collection('running')
      .doc(quizPin)
      .collection('participants')
      .doc(userNickname)
  
      participantDocument.get()
      .then((doc) => {
        if(doc.exists){
          participantDocument.update({
            points: points
          }, {merge: true})
        } else {
          console.log('error when updating points')
        }
      })
      
    } catch (error){
  
      console.log('error with points', error)  
    }
  }
}

export async function getAllParticipantScores(quizPin){
  try {
    const participantData = await firebaseInstance
    .firestore()
    .collection('running')
    .doc(quizPin)
    .collection('participants')
    .where("isPlaying", "==", true)
    .get()
      
      const array = []

      participantData.forEach(item => {
        array.push({
          id: item.id,
          ...item.data()
        })
      })
      console.log('participant scores', array)
      return(array)

  } catch(error){
    console.log('error when collection participant scores', error)
  }

}