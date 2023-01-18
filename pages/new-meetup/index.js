import NewMeetupForm from "@/components/meetups/NewMeetupForm"

function NewMeetup () {

    const meetUpHandler = (meetupData) => {
        console.log(meetupData)
    }

    return <NewMeetupForm onAddMeetup={meetUpHandler}/>
}

export default NewMeetup;