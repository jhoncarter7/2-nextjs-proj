import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/Meetupdetail";
function newMeeetupDetails() {
  return (
    <Fragment>
      <MeetupDetail
        image="https://plus.unsplash.com/premium_photo-1661963279338-9da310405e6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        title="A first meetup"
        address="some street 55, kasia kushinagar"
        description="meetup description"
      />
    
    </Fragment>
  );
}

export default newMeeetupDetails;
