const defaultDataset = {
    "init": {
        answers: [
            {content: "Request a job", nextId: "job_offer"},
            {content: "Consult about engineering career", nextId: "consultant"},
            {content: "Learn about the community", nextId: "community"},
            {content: "Would like to meet", nextId: "dating"},
        ],
        question: "Hi! What can I do for you?",
    },
    "job_offer": {
        answers: [
            {content: "Web site creation", nextId: "website"},
            {content: "Web app development", nextId: "webapp"},
            {content: "automate business process", nextId: "automation_tool"},
            {content: "others", nextId: "other_jobs"}
        ],
        question: "What kind of job?",
    },
    "website": {
        answers: [
            {content: "Contact", nextId: "contact"},
            {content: "Back to home", nextId: "init"}
        ],
        question: "Please contact here for Web site creation.",
    },
    "webapp": {
        answers: [
            {content: "Contact", nextId: "contact"},
            {content: "Back to home", nextId: "init"}
        ],
        question: "Please contact here for web app development.",
    },
    "automation_tool": {
        answers: [
            {content: "Contact", nextId: "contact"},
            {content: "Back to home", nextId: "init"}
        ],
        question: "Please contact here for business process automation.",
    },
    "other_jobs": {
        answers: [
            {content: "Contact", nextId: "contact"},
            {content: "Back to home", nextId: "init"}
        ],
        question: "Please contact here for other questions.",
    },
    "consultant": {
        answers: [
            {content: "Watch YouTube clip", nextId: "https://www.youtube.com/"},
            {content: "Learn about the community", nextId: "community"},
            {content: "Back to home", nextId: "init"}
        ],
        question: "We have a YouTube channel as our media outlet.",
    },
    "community": {
        answers: [
            {content: "What kind of activity do you have", nextId: "community_activity"},
            {content: "Would like to join the community", nextId: "https://www.google.com"},
            {content: "Back to home", nextId: "init"}
        ],
        question: "We have started learning community from 2020.  We do consult career opportunity for web engineer.",
    },
    "community_activity": {
        answers: [
            {content: "Learn more details", nextId: "https://www.youtube.com"},
            {content: "Join the community", nextId: "https://www.youtube.com"},
            {content: "Back to home", nextId: "init"}
        ],
        question: "We have meetups for introduction.\nWatch YouTube for details.",
    },
    "dating": {
        answers: [
            {content: "DM", nextId: "https://twitter.com/"},
            {content: "Back to home", nextId: "init"}
        ],
        question: "DM me for a meeting.",
    },
}

export default defaultDataset