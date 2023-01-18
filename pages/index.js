import MeetupList from "@/components/meetups/MeetupList";
import { Fragment } from "react";

const Dummy_data = [
  {
    id: "A1",
    image:
      "https://plus.unsplash.com/premium_photo-1661730227780-d9587ee1a186?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
    title: "First MeetUp",
    address: "421/M, Sri Krishna Temple Road, bengaluru",
    details: "chai pe charcha",
  },
  {
    id: "A2",
    image:
      "https://images.unsplash.com/photo-1673779623357-8b58057951dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "second MeetUp",
    address: "421/M, Sri Krishna Temple Road, bengaluru",
    details: "chai pe charcha",
  },
  {
    id: "A3",
    image:
      "https://plus.unsplash.com/premium_photo-1661963279338-9da310405e6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "third MeetUp",
    address: "421/M, Sri Krishna Temple Road, bengaluru",
    details: "chai pe charcha",
  },
];

function DetailsPage(props) {
    
//   return <MeetupList meetups={Dummy_data} />;

return <MeetupList meetups={props.meetups} />
}


//bro if u remove getstaticsPros and un commit  details return site will work 
// but after adding  this getstaticsPros its not working there is some map issue



export async function getStaticsProps() {
  return {
    props: {
      meetups: Dummy_data,
    },
  };
}

export default DetailsPage;
