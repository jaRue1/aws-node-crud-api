const candidates = require("../../data.json")
const { handleWriteFile } = require("../util")

// get
exports.getHelloWorld = (request, response) => {
  response.send(
    "<h1>Hello World !</h1> <h4>Message: Success on Live Start !</h4> <p>Version 1.0.0</p>"
  )
}

exports.getCandidates = (request, response) => {
  response.status(200).json({
    status: 200,
    data: candidates,
    message: " Gets all the candidates ",
  })
}

exports.getSingleCandidate = async (request, response) => {
  const { classId } = request.params

  const candidate = candidates.find(
    (candidate) => candidate.classId === classId
  )

  if (candidate) {
    response.status(200).json({
      status: 200,
      data: candidate,
      message: `Found candidate with the classId of ${classId}`,
    })
  } else {
    response.status(403).send({
      status: 403,
      message: "Invalid Candidate ID",
      data: null,
    })
  }
}

exports.getFavoriteColor = (request, response) => {
  console.log({ params: request.params })
  const { myColor } = request.params
  const myCandidates = candidates.filter(
    (candidate) => candidate.favColor === myColor
  )
  response.status(200).json({
    status: 200,
    data: myCandidates,
    message: " Show's the color ",
  })
}

exports.getAlphabeticalOrder = (request, response) => {
  console.log({ params: request.params })
  const sortedCandidates = candidates.sort((x, y) => {
    let first = x.name.toLowerCase()
    let last = y.name.toLowerCase()
    if (first < last) {
      return -1
    }
    if (first > last) {
      return 1
    }
    return 0
  })
  response.status(200).json({
    status: 200,
    data: sortedCandidates,
    message: " Sorts the candidates ",
  })
}

exports.getCandidatesHobbies = (request, response) => {
  const candidateHobbies = []
  for (let i = 0; i < candidates.length; i++) {
    const element = candidates[i].hobby
    candidateHobbies.push(element)
  }
  response.status(200).json({
    status: 200,
    data: candidateHobbies,
    message: "Gets the candidates hobbies",
  })
}

// post
exports.createCandidate = (request, response) => {
  if (request.body.name && request.body.classId) {
    console.log("This is what was sent", request.body)
    console.log("Current data", candidates)
    candidates.push(request.body) // returns length of array

    handleWriteFile()
    response.send(candidates)
    console.log("New data", candidates)
  } else {
    response.send("no body found or wrong body info")
  }
}

// put post if its not there patch if it its there.
// patch only post if its there if not through a 404 not found error
exports.updateCandidate = async (request, response) => {
  if (request.body.classId) {
    console.log("classId:", request.body.classId)
    // find the candidate where the ids match
    const itemFound = await candidates.find(
      (candidate) => candidate.classId === request.body.classId
    )
    console.log("itemFound: ", itemFound)
    // 1.1 find index to item found
    const indexOfItem = candidates.indexOf(itemFound)
    console.log("indexOfItem:", indexOfItem)
    // 2. update that item with the new info
    candidates[indexOfItem] = request.body
    console.log("candidates[indexOfItem]: ", candidates[indexOfItem])

    handleWriteFile()
    const updatedCandidate = candidates.find(
      (candidate) => candidate.classId === request.body.classId
    )

    if (updatedCandidate) {
      response.status(201).json({
        data: updatedCandidate,
        message: `Candidate ${request.body.classId} updated`,
      })
    }
  } else {
    response.status(403).send({
      status: 403,
      message: "Error Updating Candidate",
      data: null,
    })
  }
}

// delete
exports.deleteSingleCandidate = async (request, response) => {
  const { classId } = request.params
  const candidate = candidates.find(
    (candidate) => candidate.classId === classId
  )
  if (!candidate) {
    response.status(403).send({
      status: 403,
      message: "Invalid Candidate ID",
      data: null,
    })
  } else {

    const indexOfItem = candidates.indexOf(candidate)

    const result = candidates.splice(indexOfItem, 1)
    console.log("Deleted Candidate:", result)

    handleWriteFile(candidates)
    
    response.status(200).json({
      status: 200,
      deletedCadidate: result,
      message: `Candidate with classId ${classId} as been successfully deleted`,
    })
  }
}
