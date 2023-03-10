var video = {
    "videoUrl" : "https://ia800200.us.archive.org/7/items/Sintel/sintel-2048-stereo.mp4",
    "title" : "Sintel",
    "description" : "“Sintel” is an independently produced short film, initiated by the Blender Foundation as a means to further improve and validate the free/open source 3D creation suite Blender. With initial funding provided by 1000s of donations via the internet community, it has again proven to be a viable development model for both open 3D technology as for independent animation film. This 15 minute film has been realized in the studio of the Amsterdam Blender Institute, by an international team of artists and developers. ",
    "comments" : [
        {
            "name" : "Micheal Scott",
            "image": "images/reviewers/micheal.png",
            "comment" : "How often do people make a film where the main character kills the thing they were trying to rescue because they didn’t recognize it? Not that often. This brought tears to my eyes."
        },
        {
            "name" : "Dwight K Schrute (Asst. to the Regional Manager)",
            "image": "images/reviewers/dwight.png",
            "comment" : "Breathtaking, I’ve only just begun my blender journey. Making something every day until I get to the point I can create something on this scale. Pretty amazing short story as well. Props all around to all involved in this great piece of work!"
        },
        {
            "name" : "Jim Halpert",
            "image" : "images/reviewers/jim.png",
            "comment" : "Only the best stories can make you cry, and while I’ve lost count how many times I’ve watched this remarkable piece of art  over the years showing it to people I know, Sintel brings a tear to my eye every time. This film is inspiring not only for the beautiful story but for the magical quality animation."
        },
        {
            "name" : "Pam Beesly Halpert",
            "image" : "images/reviewers/pam.png",
            "comment" : "This short film was riveting. The musical overlay was astounding and so were the animations. I was bawling like a little kid at the end of this video and not many videos are able to do this to me."
        },
        {
            "name" : "Angela Martin",
            "image" : "images/reviewers/angela.png",
            "comment" : "I saw this movie a long time ago as a child and it still scars me to this day. This is the kind of stuff that should AT THE VERY LEAST be played before a movie the way they showed bao before The Incredibles 2. These are little masterpieces."
        },
        {
            "name" : "Kevin Malone",
            "image" : "images/reviewers/kevin.png",
            "comment" : "Wow, at first I thought that it wasn’t that good, nice animation and all but not excellent story. Then I saw the end. The feels are real. You win Blender Foundation, you win."
        },
        {
            "name" : "Andy Bernard",
            "image": "images/reviewers/andy.png",
            "comment": "Honestly seeing a story with a sad ending is refreshing, I can tell you the ending of 99% of all movies ever made. “Its a happy ending”. Its why I like game of thrones and its why I loved this."
        }
    ]
}


var poster = [
    {
        "imageUrl" : "https://ddz4ak4pa3d19.cloudfront.net/cache/56/62/5662bc2079ee7ffd491b65c29a360ac9.jpg",
        "title" : "Sprite Fright"
    },
    {
        "imageUrl" : "https://cdna.artstation.com/p/assets/covers/images/019/392/064/large/andy-goralczyk-agent-poster-street-small.jpg?1563288236",
        "title" : "Agent 327"
    },
    {
        "imageUrl" : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Spring2019AlphaPosterBlender.jpg/1200px-Spring2019AlphaPosterBlender.jpg",
        "title" : "Spring"
    }
]

//FOR VIDEO
document.querySelector('video').setAttribute('src',video.videoUrl);

// FOR VIDEO HEADING
const videoHeading = document.querySelector('.title');
videoHeading.innerHTML = video.title;

//FOR ABOUT VIDEO
const aboutVideo = document.querySelector('.about');
aboutVideo.innerHTML = video.description;

const comment = document.querySelector('.comments-heading');
comment.innerText = "Comments";

// FOR COMMENTS
const detailComment = document.querySelector('.detail-comment');
for(let index = 0; index<video.comments.length; index++){

    let commentDiv = document.createElement('div');
    commentDiv.setAttribute('class','comment-div');
    let commentorImage = document.createElement('img');
    commentorImage.setAttribute('src',video.comments[index].image);

    commentDiv.append(commentorImage);
    detailComment.append(commentDiv);
    
    let commanDiv = document.createElement('div');
    commanDiv.setAttribute('class','comman-div');
    commentDiv.appendChild(commanDiv);


    //FOR COMMENTOR NAME
    let commentorName = document.createElement('div');
    commentorName.innerHTML = video.comments[index].name;
    commentorName.setAttribute("class","commentor-name");
    commentDiv.append(commentorName);
    commanDiv.append(commentorName);
    detailComment.append(commentDiv);
    

    let particularComment = document.createElement('div');
    particularComment.innerHTML = video.comments[index].comment;
    particularComment.setAttribute("class","detailComment");
    commentDiv.append(particularComment);
    commanDiv.append(particularComment);
    detailComment.append(commentDiv);


}

// FOR UPCOMING PROJECTS
const upcomingProjects = document.querySelector('.poster-preview')
for(let value = 0; value < poster.length; value++){
    
    let movieImage = document.createElement('img');
    movieImage.setAttribute('src',poster[value].imageUrl);
    upcomingProjects.append(movieImage);

}
